/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import LoginPage from "../../pages/swift/LoginPage";
import HomePage from "../../pages/swift/HomePage";
import AuthorizationPage from "../../pages/swift/AuthorizationPage";
import MT_700_Page from "../../pages/swift/MT/MT_700_Page";
import {
  verifyAlertMessage,
  verifyAuthorization,
} from "../../utils/commonUtils";

describe("Automation Suite for MT Messages", () => {
  beforeEach("Login with valid credentials", () => {
    cy.task("readExcel", {
      filePath: "cypress/fixtures/credentials.xlsx",
      sheetName: "login_credentials",
    }).then((data) => {
      const user = data[0];
      cy.log(`Logging in as: ${user.username}`);

      LoginPage.visit(user.url);
      cy.url({ timeout: 15000 }).should("include", "/realms"); // validation; this part can be skipped

      LoginPage.login(user.username, user.password);
      cy.url().should("include", "/landing"); // validation; this part can be skipped
    });
  });

  it.only("MT_700 Automation for Multiple Charges", () => {
    HomePage.menu1();
    // HomePage.searchByFastPath('3728');
    HomePage.search_MT_Message();
    HomePage.goToPage(" MT700 - Issue of a Documentary Credit ");
    MT_700_Page.formOfDocumentCredit40A();
    MT_700_Page.documentCreditNumber20();
    MT_700_Page.dateOfIssue31C();
    MT_700_Page.applicableRules40E();
    MT_700_Page.dateOfExpiry31D();
    MT_700_Page.placeOfExpiry31D();
    MT_700_Page.applicantNameAndAddress50();
    MT_700_Page.beneficiaryNameAndAddress59();
    MT_700_Page.currencyField();
    MT_700_Page.currencyAndAmount32B();
    MT_700_Page.availableWithOption41A();
    MT_700_Page.availableWithBIC41A();
    MT_700_Page.availableBy41A();
    MT_700_Page.confirmInstructions49();
    MT_700_Page.senderBIC();
    MT_700_Page.receiverBIC();
    MT_700_Page.save();
    verifyAlertMessage("saved");
    AuthorizationPage.openMenuAndGoToAuthorization();
    AuthorizationPage.messageType("MT700");
    AuthorizationPage.authorizeByBusinessMsgIdentifier(
      MT_700_Page.documentCreditNumber_20,
    );
    AuthorizationPage.confirmAuthorization();
    verifyAuthorization("messages authorized successfully!");
  });
});
