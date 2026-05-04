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

  confirmAuthorization() {
    commonLocators
      .ByTextWithTag("button", " Yes, Authorize ")
      .should("be.visible")
      .click();
  }
}

export default new AuthorizationPage();
