describe('First test', () => {
  it('should launch google', () => {
    cy.visit('https://www.google.com/');
    cy.title().should('eq','Google');
  })
})
