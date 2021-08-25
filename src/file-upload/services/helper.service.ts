import { EVENTS_BY_SUBJECT_TYPE } from '../constants/events-subject-type.const'
import { SUBJECT_TYPE } from '../constants/subject-type.const'
import fileElementInterface from '../interfaces/file-element.interface'
import FileInterface from '../interfaces/file.interface'
import BrowserService from './browser.service'
import DomService from './dom.service'
import FileService from './file.service'

export default class HelperService {
  attachFileToElement(subject: HTMLElement, opts: fileElementInterface): void {
    const { files, subjectType, force, window } = opts

    const dataTransfer = new window.DataTransfer()
    files.forEach(f => dataTransfer.items.add(f))

    if (subjectType === SUBJECT_TYPE.INPUT) {
      const inputElement = subject[0]
      inputElement.files = dataTransfer.files

      if (force) {
        this.dispatchEvents(
          inputElement,
          this.getEventsBySubjectType(subjectType),
          dataTransfer,
        )
      }
    } else if (subjectType === SUBJECT_TYPE.DRAG_N_DROP) {
      const inputElements = subject[0].querySelectorAll('input[type="file"]')

      if (inputElements.length === 1) {
        const inputElement = inputElements[0]
        inputElement.files = dataTransfer.files

        if (force) {
          this.dispatchEvents(
            inputElement,
            this.getEventsBySubjectType(subjectType),
            dataTransfer,
          )
        }
      } else {
        const inputElement = subject[0]
        inputElement.files = dataTransfer.files

        if (force) {
          this.dispatchEvents(
            inputElement,
            this.getEventsBySubjectType(subjectType),
            dataTransfer,
          )
        }
      }
    }
  }

  getFixtureInfo(fixtureInput: string | FileInterface): FileInterface {
    const fileService = new FileService()
    if (typeof fixtureInput === 'string') {
      return {
        filePath: fixtureInput,
        encoding: '',
        mimeType: '',
        fileName: fileService.getFileName(fixtureInput),
      }
    }

    return {
      filePath: fixtureInput.filePath,
      encoding: fixtureInput.encoding || '',
      mimeType: fixtureInput.mimeType || '',
      fileName:
        fixtureInput.fileName || fileService.getFileName(fixtureInput.filePath),
      fileContent: fixtureInput.fileContent,
      lastModified: fixtureInput.lastModified,
    }
  }

  getForceValue(subject: HTMLElement): boolean {
    return (
      BrowserService.isManualEventHandling() ||
      !DomService.isElementVisible(subject) ||
      DomService.isShadowElement(subject)
    )
  }

  private dispatchEvents(
    element: HTMLElement,
    events: string[],
    dataTransfer: DataTransfer,
  ): void {
    events.forEach(event => {
      DomService.dispatchEvent(element, event, dataTransfer)
    })
  }

  private getEventsBySubjectType(subjectType: string): string[] {
    const events = EVENTS_BY_SUBJECT_TYPE[subjectType]

    events.push('change')
    // if (subjectType === SUBJECT_TYPE.DRAG_N_DROP && BrowserService.isBrowserFirefox()) {
    // }

    return events
  }
}
