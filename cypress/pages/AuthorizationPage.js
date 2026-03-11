/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../support/locators/commonLocators";
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

  authorize(text) {
    commonLocators
      .inputByPlaceholder("Search messages...")
      .should("be.visible")
      .click({ force: true });
  }
}

export default new AuthorizationPage();
