describe('locale spec', () => {
  it('locale button should exist', () => {
    cy.visit('/')
    cy.get('[data-testid="locale-button"]').should('exist')
  })

  it('locale should be en', () => {
    cy.visit('/')
    cy.get('[data-testid="locale-button"]').contains('en')
    cy.get('[data-testid="navigation-home"]').should('exist').contains('Home')
    cy.get('[data-testid="navigation-blog"]').should('exist').contains('Blog')
    cy.get('[data-testid="navigation-about_us"]').should('exist').contains('About us')
    cy.get('[data-testid="navigation-contact"]').should('exist').contains('Contact us')
    cy.url().should('eq', 'http://localhost:8080/en')
  })

  it('change locale should be work', () => {
    cy.visit('/')
    cy.get('[data-testid="locale-button"]').contains('en').click()
    cy.get('[data-testid="locale-button"]').contains('ru')
    cy.get('[data-testid="navigation-home"]').should('exist').contains('Главная')
    cy.get('[data-testid="navigation-blog"]').should('exist').contains('Блог')
    cy.get('[data-testid="navigation-about_us"]').should('exist').contains('О нас')
    cy.get('[data-testid="navigation-contact"]').should('exist').contains('Контакты')
    cy.url().should('eq', 'http://localhost:8080/ru')
  })
})
