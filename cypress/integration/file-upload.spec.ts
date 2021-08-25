describe('File upload test', () => {
  beforeEach(() => {
    cy.request({
      url: 'https://test-app.wisersp.com/api/v2/login',
      method: 'POST',
      failOnStatusCode: false,
      body: {
        email: 'crissalless@gmail.com',
        password: 'turma3wsp',
      },
    }).then(response => {
      expect(response.status).to.be.eql(200)
      cy.visit('https://test-app.wisersp.com/')
    })
  })

  it('displays two todo items by default', () => {
    cy.get('[data-cy="@sidebar/profile-button"]', { timeout: 30000 })
      .should('be.visible')
      .click({ force: true })

    cy.get('[data-cy="@profile/edit-nickname-button"]', { timeout: 30000 }).click()

    cy.url({ timeout: 30000 }).should('contain', 'wisersp.com/perfil')

    cy.get('#avatar-profile').attachFile(['bandeira.jpg'],
      {
        subjectType: 'drag-n-drop',
        force: true,
        allowEmpty: true
      })
    cy.log('Imagem enviada')
  })
});