describe('Gallery page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/gallery')
  })

  it('should view image on thumbnail click', () => {
    cy.get('[data-test=gallery-thumbnail-wrap]')
      .find('[data-test=carousel-item-4]')
      .as('fourthIndexThumbnail')

    cy.get('[data-test=gallery-viewer-wrap]')
    .find('[data-test=carousel-item-4]')
    .as('fourthIndexImage')

    cy.get('@fourthIndexImage')
      .should('not.be.visible')

    cy.get('@fourthIndexThumbnail')
      .click()

    cy.get('@fourthIndexImage')
      .should('be.visible')
  })

  it('should view images on navigation button clicks', () => {
    const clickEvents = (element: Cypress.Chainable<JQuery<HTMLElement>>, count: number) => {
      for ( let i = 0; i < count; i++ ) {
        element.click()
      }
    }

    const nextButton = cy.get('[data-test=nav-next]')
    clickEvents(nextButton, 5)

    cy.get('[data-test=gallery-viewer-wrap]')
      .find('[data-test=carousel-item-5]')
      .as('fourthIndexImage')
      .should('be.visible')

    const previousButton = cy.get('[data-test=nav-prev]')
    clickEvents(previousButton, 5)

    cy.get('[data-test=gallery-viewer-wrap]')
      .find('[data-test=carousel-item-0]')
      .as('zenithIndexImage')
      .should('be.visible')
  })
})

export {}