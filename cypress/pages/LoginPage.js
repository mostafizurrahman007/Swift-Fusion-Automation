/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

class LoginPage {

  visit() {
    cy.log("Visiting the application");
    cy.visit("/");
  }

  login(username, password) {
    cy.log(`Logging in as ${username}`);

    cy.url({ timeout: 15000 }).should('include', '/realms');

    cy.location("origin").then((keycloakOrigin) => {
      cy.origin(keycloakOrigin, { args: { username, password } }, ({ username, password }) => {
        cy.get('#username').should('be.visible').clear().type(username);
        cy.get('#password').should('be.visible').clear().type(password);
        cy.get("#kc-login").should('be.visible').and("not.be.disabled").click();
      });
    });

    cy.url().should('include', '/landing');
  }

}

export default new LoginPage;
