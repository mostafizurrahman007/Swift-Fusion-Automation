/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

class OldSwiftLoginPage {
  visit() {
    cy.log("Visiting the application");
    cy.visit("/login");
  }

  login(username, password) {
    cy.log(`Logging in as ${username}`);

    cy.url({ timeout: 20000 }).should("include", "/login");

    cy.get("input[formcontrolname='username']", { timeout: 10000 })
      .should("be.visible")
      .clear()
      .type(username);

    cy.get("input[formcontrolname='password']")
      .should("be.visible")
      .clear()
      .type(password);

    cy.get("button[type='submit']").should("be.visible").and("not.be.disabled").click();

    cy.url({ timeout: 20000 }).should("not.include", "/dashboard");
  }
}

export default new OldSwiftLoginPage();
