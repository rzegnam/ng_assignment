describe('Checks the signup form', () => {
  const { fakeEmail, fakePassword, badEmail, worstEmail, theWorstEmail } = Cypress.config()
  beforeEach(() => {
    cy.visit('/signup');
  })

  it('should check for all the mandatory fields', () => {
    cy.get('h1').contains("Let's get started")
    cy.contains('Sign up for free').click()
    cy.contains('Please enter a valid email address')
    cy.contains('A password is required')
    cy.get('input[name=email-address]')
    .type(fakeEmail)
    .should('have.value', fakeEmail)
    cy.contains('A password is required')
    cy.get('input[name=password]')
    .type(fakePassword)
    .should('have.value', fakePassword)
    cy.contains('Sign up for free').click()
    cy.contains('You must agree in order to use Toggl')
    cy.url().should('include', '/signup')
  })

  it('validates email input', () => {
    cy.get('input[name=email-address]')
    .type(badEmail)
    .should('have.value', badEmail)
    cy.contains('Please enter a valid email address')
    cy.get('input[name=email-address]').clear()
  

    cy.get('input[name=email-address]')
    .type(worstEmail)
    .should('have.value', worstEmail)
    cy.contains('Please enter a valid email address')
    cy.get('input[name=email-address]').clear()

    cy.get('input[name=email-address]')
    .type(theWorstEmail)
    .should('have.value', theWorstEmail)
    cy.contains('Please enter a valid email address')
    cy.get('input[name=email-address]').clear()

  })
})