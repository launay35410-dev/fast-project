describe('CURA Healthcare - Smoke test', () => {
  it('should open the home page', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    cy.contains('CURA Healthcare Service').should('be.visible');
  });
});
