describe('Recipe page', () => {
  it('should display a recipe', () => {
    cy.visit('/recipes')

    cy.get('[class=main]')
      .find('a')
      .first()
      .click()

    cy.get('[class=card]')
      .as('recipeCard')

    cy.get('@recipeCard')
      .get('[class=card-header]')
      .as('cardHeader')
    
    cy.get('@cardHeader')
      .get('[class*=card-title]')
      .should('be.visible')

    cy.get('@cardHeader')
      .get('[class=card-link]')
      .should('be.visible')
      .and('have.attr', 'href')
    
    cy.get('@cardHeader')
      .should('include.text', 'servings')

    cy.get('@recipeCard')
      .get('[class=card-body]')
      .should('include.text', 'Ingredients')
      .and('include.text', 'ea egg')
      .and('include.text', 'Instructions')
      .and('include.text', '1. ')
  })  
})