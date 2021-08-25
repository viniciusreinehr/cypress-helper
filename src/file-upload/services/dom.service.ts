export default class DomService {
  static dispatchEvent(
    target: HTMLElement,
    event: string,
    dataTransfer: DataTransfer,
  ): void {
    const eventPayload = {
      bubbles: true,
      cancelable: true,
      detail: dataTransfer,
    }

    try {
      const e = new CustomEvent(event, eventPayload)
      Object.assign(e, { dataTransfer })

      target.dispatchEvent(e)
    } catch (e) {
      // make sure event triggering won't break if subject element is not visible or in DOM anymore
    }
  }

  static isElementVisible(element: HTMLElement): boolean {
    if (!element) {
      throw new Error('Element cannot be empty')
    }

    /* running isVisible command on detached element throws an error */
    return Cypress.dom.isAttached(element) && Cypress.dom.isVisible(element)
  }

  static isShadowElement(element: HTMLElement): boolean {
    if (!element) {
      throw new Error('Element cannot be empty')
    }

    return Cypress.dom.isDetached(element)
  }
}
