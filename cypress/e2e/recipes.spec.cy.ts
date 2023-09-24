describe('Recipes page', () => {
  it('should list recipe page links', () => {
    cy.visit('/recipes')
    
    cy.get('.main').find('a').first().as('recipeLink')
      .should('have.attr', 'href')
      .and('include', '/recipe/')

    cy.get('@recipeLink').click().url()
      .should('include', '/recipe/')
  })
})