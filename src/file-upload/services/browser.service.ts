const BROWSER_FIREFOX = 'firefox'
const BROWSER_CHROME = 'chrome'

export default class BrowserService {

  static isBrowserFirefox(): boolean {
    const { name } = Cypress.browser
  
    return name === BROWSER_FIREFOX
  }

  static isManualEventHandling(): boolean {
    const { name, majorVersion } = Cypress.browser
  
    if (name === BROWSER_CHROME && majorVersion < 73) {
      return false
    }
  
    return true
  }  
}