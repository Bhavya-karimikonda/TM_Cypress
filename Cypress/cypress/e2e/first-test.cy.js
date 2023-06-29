describe('First test suite', () => {

  it('Verify Browserstack logo is visible', () => {

      cy.visit('https://www.browserstack.com/');
      cy.get('#logo').should('be.visible');

  })

  it('Verify Header is present', () => {

      cy.visit('https://www.browserstack.com/');

      cy.get('h1').first().should('be.exist');

  })

  it('Verify Product menu are present', () => {

      cy.visit('https://www.browserstack.com/');


      cy.get('#product-menu-toggle').first().should('be.exist');

      cy.get('#developers-menu-toggle').first().should('be.exist');

      cy.get('#developers-menu-toggle').first().should('be.exist');

  })

  it('Verify menu Links are  present', () => {

      cy.visit('https://www.browserstack.com/');


      cy.get("a[title='Pricing']").first().should('be.exist');

      cy.get("a[title='Sign In']").first().should('be.exist');

      cy.get("a[title='Live for Teams']").first().should('be.exist');

  })

})


describe('Second Test Suite', () => {
  it('second bstack test', () => {
    cy.visit('https://example.cypress.io')
  })
})