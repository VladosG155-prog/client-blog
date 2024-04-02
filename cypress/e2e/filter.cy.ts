describe('category filter spec', () => {
  it('filter should work', () => {
    cy.visit('/category?val=Business')
    cy.get('[data-testid="category-name"]').contains('Business')
    cy.get('[data-testid="tags-search"]').should('exist').type('Busine')
    cy.get('[data-testid="search-hints"]').contains('Business').click()
    cy.get('[data-testid="search-btn"]').click()
    cy.get('[data-testid="tags-search"]').should('have.value', '')
    cy.url().should('eq', 'http://localhost:8080/en/category?val=Business&tags=Business')
  })
})
