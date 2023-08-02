describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should collapse nav on smaller screen size', () => {
    cy.get('[id=responsive-navbar-nav]')
      .as('navLinks')

    cy.get('[aria-controls=responsive-navbar-nav]')
      .as('toggleButton')

    cy.viewport('macbook-16')
    cy.get('@navLinks')
      .should('be.visible')

    cy.viewport('iphone-xr')
    cy.get('@navLinks')
      .should('not.be.visible')
    cy.get('@toggleButton')
      .click()
    cy.get('@navLinks')
      .should('be.visible')
  })
})