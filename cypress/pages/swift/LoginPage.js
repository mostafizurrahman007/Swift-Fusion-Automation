/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

class LoginPage {
  visit(url) {
    cy.log("Visiting the application");
    cy.visit(url);

    const appOrigin = new URL(url).origin;
    Cypress.env("appOrigin", appOrigin); // save app origin from Excel URL
  }

  login(username, password) {
    cy.log(`Logging in as ${username}`);

    const appOrigin = Cypress.env("appOrigin");

    cy.location("origin").then((currentOrigin) => {
      if (currentOrigin !== appOrigin) {
        // ✅ currentOrigin IS the Keycloak URL — fully dynamic, no hardcode
        cy.origin(
          currentOrigin,
          { args: { username, password } },
          ({ username, password }) => {
            cy.get("#username").should("be.visible").clear().type(username);
            cy.get("#password").should("be.visible").clear().type(password);
            cy.get("#kc-login")
              .should("be.visible")
              .and("not.be.disabled")
              .click();
          },
        );
      } else {
        // ✅ no redirect happened — interact directly
        cy.get("#username").should("be.visible").clear().type(username);
        cy.get("#password").should("be.visible").clear().type(password);
        cy.get("#kc-login").should("be.visible").and("not.be.disabled").click();
      }
    });
  }
}

export default new LoginPage();
