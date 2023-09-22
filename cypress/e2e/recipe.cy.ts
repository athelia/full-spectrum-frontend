describe('Recipe page', () => {
  it('should display a recipe', () => {
    cy.visit('/recipes').get('a[href*="/recipe/"]').click()

    cy.get('.card-header')
      .should('include.text', 'servings')
    
    cy.get('.card-title')
      .should('be.visible')

    cy.get('.card-link')
      .should('be.visible')
      .and('have.attr', 'href')

    cy.get('.card-body')
      .should('include.text', 'Ingredients')
      .and('include.text', 'ea egg')
      .and('include.text', 'Instructions')
      .and('include.text', '1. ')
  })
})