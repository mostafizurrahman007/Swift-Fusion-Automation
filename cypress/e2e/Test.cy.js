/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MessagePage from "../pages/MessagePage";
import MX_029_Page from "../pages/MX_029_Page";
import MX_109_Page from "../pages/MX_109_Page";
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

  it("Check MX Messages", () => {
    // homePage.search("PACS02");

    HomePage.menu();
    // HomePage.search("CAMT53");
    HomePage.search_MX_Message();
    HomePage.errorLog();
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
    HomePage.menu();
    // HomePage.menu1();
    // HomePage.search("CAMT53");
    // HomePage.search_MX_Message();
    HomePage.search_MX_Message1();
    HomePage.debug();
    HomePage.errorLog();
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

  it("MX_029 Test", () => {
    HomePage.menu1();
    HomePage.search_MX_Message();
    HomePage.goToCamt_029();
    MX_029_Page.charSetField();
    MX_029_Page.inputFromBIC();
    MX_029_Page.inputToBIC();
    MX_029_Page.fromClearingSystemID();
    MX_029_Page.toClearingSystemID();
    MX_029_Page.assignerClearingSystemID();
    MX_029_Page.assigneeClearingSystemID();
    MX_029_Page.fromMemberID();
    MX_029_Page.toMemberID();
    MX_029_Page.assignerMemberID();
    MX_029_Page.assigneeMemberID();
    MX_029_Page.fromLei();
    MX_029_Page.toLei();
    MX_029_Page.assignerLei();
    MX_029_Page.assigneeLei();
    MX_029_Page.copyDuplicateField();
    MX_029_Page.marketPracticeRegistryField();
    MX_029_Page.marketPracticeIdentificationField();
    MX_029_Page.relatedCharacterSetField();
    // MX_029_Page.relatedFromBIC();
    // MX_029_Page.relatedToBIC();
    MX_029_Page.businessMsg();
    MX_029_Page.relatedBusinessMsgID();
    MX_029_Page.assignmentIdentificationField();
    MX_029_Page.assignerBIC();
    MX_029_Page.confirmationDialog();
    MX_029_Page.cancellationStatusID();
    MX_029_Page.caseIdentificationField();
    MX_029_Page.creatorTypeField();
    MX_029_Page.agentBIC();
    MX_029_Page.originalMsgId();
    MX_029_Page.originalMsgNameId();
    MX_029_Page.UETR();
    MX_029_Page.save();
  });

  it.only("Check CAMT_109 Automation", () => {
    HomePage.menu1();
    // HomePage.search("CAMT53");
    HomePage.search_MX_Message();
    HomePage.goToCamt_109();
    MX_109_Page.charSetField();
    MX_109_Page.inputFromBIC();
    MX_109_Page.inputToBIC();
    MX_109_Page.fromClearingSystemID();
    MX_109_Page.toClearingSystemID();
    MX_109_Page.fromMemberID();
    MX_109_Page.toMemberID();
    MX_109_Page.fromLei();
    MX_109_Page.toLei();
    MX_109_Page.businessMsg();
    MX_109_Page.msgID();
    MX_109_Page.dateCreationField();
    MX_109_Page.copyDuplicateField();
    MX_109_Page.priorityField();
    MX_109_Page.registryField();
    MX_109_Page.numberOfCheques();
    MX_109_Page.chequeIdentificationField();
    MX_109_Page.originalIdentification();
    MX_109_Page.chequeNumber();
    MX_109_Page.issueDateField();
    MX_109_Page.currencyField();
    MX_109_Page.amountField();
    MX_109_Page.chequeEffectiveDateField();
    MX_109_Page.chequeCancellationOriginatorField();
    MX_109_Page.codeField();
    MX_109_Page.chequeCancellationAdditionalInfoField();
    MX_109_Page.save();
  });
});
