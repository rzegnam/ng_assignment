Cypress.Commands.add("enterInvalidMail", email => {
  cy.get("input[name=email-address]")
    .type(email)
    .should("have.value", email);
  cy.contains("Please enter a valid email address");
  cy.get("input[name=email-address]").clear();
});
