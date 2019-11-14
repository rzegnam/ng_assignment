describe("Checks the signup form", () => {
  const { fakeEmail, fakePassword } = Cypress.config();
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("TS2: should check for all the mandatory fields", () => {
    cy.get("h1").contains("Let's get started");

    cy.contains("Sign up for free").click();
    cy.get(".signup__form-wrap")
      .should("contain", "Please enter a valid email address")
      .and("contain", "A password is required");

    cy.get("input[name=email-address]")
      .type(fakeEmail)
      .should("have.value", fakeEmail);
    cy.contains("A password is required");

    cy.get("input[name=password]")
      .type(fakePassword)
      .should("have.value", fakePassword);

    cy.contains("Sign up for free").click();
    cy.contains("You must agree in order to use Toggl");
    cy.url().should("include", "/signup");
  });

  it("TS3: validates email input", () => {
    cy.enterInvalidMail("mail@");
    cy.enterInvalidMail("mail@o2");
    cy.enterInvalidMail("@o2.pl");
  });
});
