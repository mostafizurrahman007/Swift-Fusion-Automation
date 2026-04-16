/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import OldSwiftLoginPage from "../pages/OldSwiftLoginPage";
import OldSwiftHomePage from "../pages/OldSwiftHomePage";
import OldSwift_Camt_029_Page from "../pages/OldSwift_Camt_029_Page";
import OldSwift_Camt_109_Page from "../pages/OldSwift_Camt_109_Page";
import { commonLocators } from "../support/locators/commonLocators";

describe.skip("Automation Suite", () => {
  beforeEach("Login with valid credentials", () => {
    cy.task("readExcel", {
      filePath: "cypress/fixtures/credentials.xlsx",
      sheetName: "login_credentials",
    }).then((data) => {
      const user = data[1];
      cy.log(`Logging in as: ${user.username}`);

      OldSwiftLoginPage.visit();

      OldSwiftLoginPage.login(user.username, user.password);
    });
  });

  it.only("Check MX_CAMT_029 Automation", () => {
    // homePage.search("PACS02");
    OldSwiftHomePage.menu();
    // HomePage.search("CAMT53");
    OldSwiftHomePage.search_MX_Message();
    OldSwiftHomePage.goToCamt_029();
    OldSwift_Camt_029_Page.charSetField();
    // OldSwift_Camt_029_Page.inputFromBIC();
    // OldSwift_Camt_029_Page.inputToBIC();
    OldSwift_Camt_029_Page.fromClearingSystemID();
    OldSwift_Camt_029_Page.toClearingSystemID();
    OldSwift_Camt_029_Page.assignerClearingSystemID();
    OldSwift_Camt_029_Page.assigneeClearingSystemID();
    OldSwift_Camt_029_Page.fromMemberID();
    OldSwift_Camt_029_Page.toMemberID();
    OldSwift_Camt_029_Page.assignerMemberID();
    OldSwift_Camt_029_Page.assigneeMemberID();
    OldSwift_Camt_029_Page.fromLei();
    OldSwift_Camt_029_Page.toLei();
    OldSwift_Camt_029_Page.assignerLei();
    OldSwift_Camt_029_Page.assigneeLei();
    OldSwift_Camt_029_Page.copyDuplicateField();
    OldSwift_Camt_029_Page.marketPracticeRegistryField();
    OldSwift_Camt_029_Page.marketPracticeIdentificationField();
    OldSwift_Camt_029_Page.relatedCharacterSetField();
    OldSwift_Camt_029_Page.relatedFromBIC();
    OldSwift_Camt_029_Page.relatedToBIC();
    // OldSwift_Camt_029_Page.businessMsg();
    // OldSwift_Camt_029_Page.assignmentIdentificationField();
    // OldSwift_Camt_029_Page.assignerBIC();
    // OldSwift_Camt_029_Page.confirmationDialog();
    // OldSwift_Camt_029_Page.cancellationStatusID();
    // OldSwift_Camt_029_Page.caseIdentificationField();
    // OldSwift_Camt_029_Page.creatorTypeField();
    // OldSwift_Camt_029_Page.agentBIC();
    // OldSwift_Camt_029_Page.originalMsgId();
    // OldSwift_Camt_029_Page.originalMsgNameId();
    // OldSwift_Camt_029_Page.UETR();
    // OldSwift_Camt_029_Page.save();
  });

  it("Check CAMT_109 Automation", () => {
    OldSwiftHomePage.menu();
    // HomePage.search("CAMT53");
    OldSwiftHomePage.search_MX_Message();
    OldSwiftHomePage.goToCamt_109();
    OldSwift_Camt_109_Page.inputFromBIC();
    OldSwift_Camt_109_Page.inputToBIC();
    OldSwift_Camt_109_Page.msgID();
    OldSwift_Camt_109_Page.dateCreationField();
    OldSwift_Camt_109_Page.numberOfCheques();
    OldSwift_Camt_109_Page.originalIdentification();
    OldSwift_Camt_109_Page.chequeNumber();
    OldSwift_Camt_109_Page.issueDateField();
    OldSwift_Camt_109_Page.currencyField();
    OldSwift_Camt_109_Page.amountField();
    OldSwift_Camt_109_Page.codeField();
    OldSwift_Camt_109_Page.save();
  });
});
