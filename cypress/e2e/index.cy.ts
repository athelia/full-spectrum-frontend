describe('Home page', () => {
  it('should collapse nav on smaller screen size', () => {
    cy.visit('/')
    cy.get('#responsive-navbar-nav').as('navLinks')

    cy.viewport('macbook-16').get('@navLinks')
      .should('be.visible')
      .and('contain', 'Order')

    cy.viewport('iphone-xr').get('@navLinks')
      .should('not.be.visible')
    cy.get('button[aria-label="Toggle navigation"]').click().get('@navLinks')
      .should('be.visible')
      .and('contain', 'Order')
  })
})