/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

class LoginPage {
  visit() {
    cy.log("Visiting the application");
    cy.visit("/");
  }

  login(username, password) {
    //method which will be called in test runner
    cy.log(`Logging in as ${username}`);

    cy.url({ timeout: 15000 }).should("include", "/realms"); // validation; this part can be skipped

    cy.location("origin").then((keycloakOrigin) => {
      // getting the current url origin then target the url where it accessing the page
      cy.origin(
        keycloakOrigin,
        { args: { username, password } },
        ({ username, password }) => {
          //passing variable safely as it can not directly interact inside the origin so passing as argument
          cy.get("#username").should("be.visible").clear().type(username); //interacting with username field
          cy.get("#password").should("be.visible").clear().type(password); // interacting with password field
          cy.get("#kc-login")
            .should("be.visible")
            .and("not.be.disabled")
            .click(); // interacting with login button
        },
      );
    });

    cy.url().should("include", "/landing"); // validation; this part can be skipped
  }
}

export default new LoginPage();
