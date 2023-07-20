import React from 'react'
import Header from '@/components/Header'

describe('Header component', () => {
  it('renders links', () => {
    cy.mount(<Header />)
    cy.get('a').should('have.length', 7)
  })

  it('renders Home link', () => {
    cy.mount(<Header />)
    cy.get('a')
      .contains('Home')
      .should('have.attr', 'href', '/')
  })

  it('renders Order Eggs Link', () => {
    cy.mount(<Header />)
    cy.get('a')
      .contains('Order Eggs')
      .should('have.attr', 'href', '/order-eggs')
  })

})