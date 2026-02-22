/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MessagePage from "../pages/MessagePage";
import { commonLocators } from "../support/locators/commonLocators";

describe("Automation Suite", () => {
  beforeEach("Login with valid credentials", () => {
    cy.task("readExcel", {
      filePath: "cypress/fixtures/credentials.xlsx",
      sheetName: "login_credentials",
    }).then((data) => {
      const user = data[0];
      cy.log(`Logging in as: ${user.username}`);

      LoginPage.visit();

      LoginPage.login(user.username, user.password);
    });
  });

  it.only("Check MX Messages", () => {
    // homePage.search("PACS02");

    HomePage.menu();
    // HomePage.search("CAMT53");
    HomePage.search_MX_Message();
    HomePage.errorLog()
    // MessagePage.inputFromBIC();
    // MessagePage.inputToBIC();
    // MessagePage.businessMsg();
    // MessagePage.firstIdentificationField();
    // MessagePage.assignerBIC();
    // MessagePage.confirmationDialog();
    // MessagePage.cancellationStatusID();
    // MessagePage.secondIdentificationField();
    // HomePage.logout();
  });

  it("Check MX Messages Again", () => {
    // homePage.search("PACS02");
    HomePage.reloadWindow();
    HomePage.menu()
    // HomePage.menu1();
    // HomePage.search("CAMT53");
    // HomePage.search_MX_Message();
    HomePage.search_MX_Message1();
    HomePage.debug()
    HomePage.errorLog()
    // MessagePage.inputFromBIC();
    // MessagePage.inputToBIC();
    // MessagePage.businessMsg();
    // MessagePage.firstIdentificationField();
    // MessagePage.assignerBIC();
    // MessagePage.confirmationDialog();
    // MessagePage.cancellationStatusID();
    // MessagePage.secondIdentificationField();
    // HomePage.logout()
  });
});
