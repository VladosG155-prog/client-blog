describe('navigation spec', () => {
  it('navigation bar should exist', () => {
    cy.visit('/')
    cy.get('[data-testid="navigation"]').should('exist')
  })

  it('navigation links should exist', () => {
    cy.visit('/')
    cy.get('[data-testid="navigation-home"]').should('exist')
    cy.get('[data-testid="navigation-blog"]').should('exist')
    cy.get('[data-testid="navigation-about_us"]').should('exist')
    cy.get('[data-testid="navigation-contact"]').should('exist')
  })

  it('navigation links should work', () => {
    cy.visit('/')
    cy.get('[data-testid="navigation-home"]').click()
    cy.url().should('eq', 'http://localhost:8080/en')
    cy.get('[data-testid="navigation-blog"]').click()
    cy.url().should('eq', 'http://localhost:8080/en/blog')
    cy.visit('/')
    cy.get('[data-testid="navigation-about_us"]').click()
    cy.url().should('eq', 'http://localhost:8080/en/about-us')
    cy.get('[data-testid="navigation-contact"]').click()
    cy.wait(500)
    cy.url().should('eq', 'http://localhost:8080/en/contact-us')
  })
})
