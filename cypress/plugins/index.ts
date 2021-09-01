/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-var-requires
const { lighthouse, prepareAudit } = require('cypress-audit')
import AuditPrinter from '../../src/audit-printer/index'

export default (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    prepareAudit(launchOptions)
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--disable-gpu')
      return launchOptions
    }
  })

  on('task', {
    lighthouse: lighthouse(item => {
      const audit = new AuditPrinter(item)
      audit.print()
    }),
  })
}
