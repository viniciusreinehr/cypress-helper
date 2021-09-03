describe('Audit printer tests', () => {
  beforeEach(() => {
    cy.visit('https://online.wiseup.com/login?lang=pt')
  })

  it('Performance', () => {
    const customThresholds = {
      performance: 0,
      accessibility: 0,
      seo: 0,
      'best-practices': 0,
      pwa: 0,
      'server-response-time': 1500,
    }

    cy.lighthouse(customThresholds)
  })
});