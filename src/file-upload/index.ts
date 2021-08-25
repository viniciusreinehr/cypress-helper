import { DEFAULT_PROCESSING_OPTIONS } from './constants/processing-options.const';
import mainService from './services/main.service'

const main = new mainService();
const initialize = () => {
  Cypress.Commands.add('attachFile', { prevSubject: true }, (subject?: HTMLElement, fixtureOrFixtureArray?: string, processingOptions?: typeof DEFAULT_PROCESSING_OPTIONS) => {
    main.attachFile(subject, fixtureOrFixtureArray, processingOptions)
  })
}

initialize()
