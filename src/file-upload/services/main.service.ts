import { DEFAULT_PROCESSING_OPTIONS } from '../constants/processing-options.const'
import HelperService from './helper.service'
import fileElementInterface from '../interfaces/file-element.interface'
import FileInterface from '../interfaces/file.interface'
import ObjectService from './object.service'
import ValidatorService from './validator.service'
import FileService from './file.service'

export default class mainService {
  constructor(
    private readonly helper = new HelperService(),
    private readonly file = new FileService(),
  ) {}

  attachFile(
    subject: HTMLElement,
    fixtureOrFixtureArray: string,
    processingOptions: typeof DEFAULT_PROCESSING_OPTIONS,
  ): unknown {
    const { subjectType, force, allowEmpty } = ObjectService.merge(
      processingOptions,
      DEFAULT_PROCESSING_OPTIONS,
    )
    ValidatorService.options({
      subjectType,
      force,
      allowEmpty,
    })

    const fixturesArray = Array.isArray(fixtureOrFixtureArray)
      ? fixtureOrFixtureArray
      : [fixtureOrFixtureArray]
    const fixtures = fixturesArray
      .map(this.helper.getFixtureInfo)
      .filter((fixture: FileInterface) => ValidatorService.fixtures(fixture))

    cy.window({ log: false }).then(window => {
      const forceValue = force || this.helper.getForceValue(subject)

      Cypress.Promise.all(
        fixtures.map(f => {
          return this.file.resolveFile(f, window)
        }),
      )
        .then(files => {
          return files.filter((f: string | File) =>
            ValidatorService.file(f as File, allowEmpty),
          )
        })
        .then(files => {
          this.helper.attachFileToElement(subject, {
            files,
            subjectType,
            force: forceValue,
            window,
          } as unknown as fileElementInterface)
          return files
        })
        .then(files => {
          Cypress.log({
            name: 'attachFile',
            displayName: 'FILE',
            message: files.reduce(this.reduce, ''),
          })
        })
    })

    return cy.wrap(subject, { log: false })
  }

  private reduce(acc, f) {
    return `${acc.length > 0 ? `${acc}, ` : acc}${f.name}`
  }
}
