describe('File upload test', () => {
  beforeEach(() => {
    cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
  })

  it('Should be upload a picture in profile', () => {
    cy.get('#file').attachFile(['bandeira.jpg'],
      {
        subjectType: 'drag-n-drop',
        force: true,
        allowEmpty: true
      })
  })
});