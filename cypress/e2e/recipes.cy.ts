describe('Recipes page', () => {
  it('should navigate to recipe page on link click', () => {
    cy.visit('/recipes')
    
    cy.get('[class=main]')
      .find('a')
      .first()
      .as('recipeLink')
    
    cy.get('@recipeLink')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', '/recipe/')

    cy.get('@recipeLink')
      .click()

    cy.url()
      .as('recipeUrl')

    cy.get('@recipeUrl')
      .should('include', Cypress.config().baseUrl + '/recipe/')
  })
})