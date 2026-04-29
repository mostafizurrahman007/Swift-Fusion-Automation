/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../../support/locators/commonLocators";
import HomePage from "./HomePage";

class AuthorizationPage {
  openMenuAndGoToAuthorization() {
    HomePage.menu1();
    commonLocators
      .ByTextWithTag("p", "Message List", {
        timeout: 10000,
      })
      .scrollIntoView()
      .click({ force: true });

    commonLocators
      .ByTextWithTag("p", " Authorization ", {
        timeout: 10000,
      })
      .scrollIntoView()
      .click({ force: true });

    cy.get(".drawer-container > div.flex.border-b button")
      .eq(0)
      .should("exist")
      .and("be.visible")
      .click({ force: true }, { timeout: 15000 });
  }

  messageType(text) {
    cy.get('input[controlname="messageType"]')
      .scrollIntoView()
      .should("be.visible")
      .click()
      .clear()
      .type(`${text}{enter}`);
  }

  authorizeByBusinessMsgIdentifier(identifier) {
    cy.contains("div", identifier)
      .scrollIntoView()
      .parents("tr")
      .find('input[type="checkbox"]')
      .check({ force: true });

    cy.contains("button", "Authorize").should("be.visible").click();
  }

  confirmAuthorization(){
    commonLocators.ByTextWithTag('button', ' Yes, Authorize ').should('be.visible').click()
    cy.contains('p', 'messages authorized successfully!', { timeout: 4000 })
  .should('be.visible')
  .invoke('text')
  .then((msg) => {
    const alertMessage = msg.trim();
    cy.log("Alert Message: " + alertMessage);

    expect(alertMessage.toLowerCase()).to.include("messages authorized successfully!");
  });
  commonLocators.ByTextWithTag('button', ' OK ').should('be.visible').click();
  }
}

export default new AuthorizationPage();
