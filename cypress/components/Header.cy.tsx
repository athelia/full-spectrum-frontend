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
      .contains('Full Spectrum Eggs')
      .should('have.attr', 'href', '/')
  })

  it('renders Order Link', () => {
    cy.mount(<Header />)
    cy.get('a')
      .contains('Order')
      .should('have.attr', 'href', '/order')
  })

})