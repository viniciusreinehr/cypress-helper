describe('File upload test', () => {
  beforeEach(() => {
    cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
  })

  it('displays two todo items by default', () => {
    cy.get('#file').attachFile(['bandeira.jpg'],
      {
        subjectType: 'drag-n-drop',
        force: true,
        allowEmpty: true
      })
  })
});