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
  }

  authorize(text) {
    commonLocators
      .ByControlName("messageType")
      .clear()
      .type(text + "{enter}");
  }
}

export default new AuthorizationPage();
