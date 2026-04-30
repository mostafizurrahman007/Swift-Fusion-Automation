/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import {
  commonLocators,
} from "../../support/locators/commonLocators";
import { randomString } from "../../utils/commonUtils";

class MX_029_Page {
  businessMsgText = randomString();

  charSetField() {
    commonLocators.ByControlName("charSet").clear().type("A");
  }

  inputFromBIC() {
    commonLocators.ByControlName("fromBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn2").should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  inputToBIC() {
    commonLocators.ByControlName("toBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("K");
    commonLocators.ByID("id_btn2").click().should("be.visible");
    commonLocators.ByTextWithTag("td", "BANGLADESH KRISHI BANK").dblclick();
  }

  fromClearingSystemID() {
    commonLocators
      .inputByPlaceholder(" Search clearing system id code")
      .eq(0)
      .click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  toClearingSystemID() {
    commonLocators
      .inputByPlaceholder(" Search clearing system id code")
      .eq(1)
      .click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  assignerClearingSystemID() {
    commonLocators
      .inputByPlaceholder(" Search clearing system id code")
      .eq(2)
      .click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  assigneeClearingSystemID() {
    commonLocators
      .inputByPlaceholder(" Search clearing system id code")
      .eq(3)
      .click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  fromMemberID() {
    commonLocators.ByControlName("fromMmbId").clear().type(1);
  }

  toMemberID() {
    commonLocators.ByControlName("toMmbId").clear().type(1);
  }

  assignerMemberID() {
    commonLocators.ByControlName("assgnrMmbId").clear().type(1);
  }

  assigneeMemberID() {
    commonLocators.ByControlName("assgneMmbId").clear().type(1);
  }

  fromLei() {
    commonLocators
      .ByControlName("fromLei")
      .clear()
      .type("11111111111111111111");
  }

  toLei() {
    commonLocators.ByControlName("toLei").clear().type("11111111111111111111");
  }

  assignerLei() {
    commonLocators
      .ByControlName("assgnrLei")
      .clear()
      .type("11111111111111111111");
  }

  assigneeLei() {
    commonLocators
      .ByControlName("assgneLei")
      .clear()
      .type("11111111111111111111");
  }

  copyDuplicateField() {
    commonLocators.inputByPlaceholder(" Search copy duplicate").click();
    commonLocators
      .ByTextWithTag("div", " COPY - Copy ")
      .should("be.visible")
      .click();
  }

  marketPracticeRegistryField() {
    commonLocators
      .ByTextWithTag("span", "Market Practice")
      .should("be.visible")
      .click();
    commonLocators.ByControlName("mktPrctcRegy").clear().type("A");
  }

  marketPracticeIdentificationField() {
    // commonLocators.ByTextWithTag('span', 'Market Practice').should('be.visible').click();
    commonLocators.ByControlName("mktPrctcId").clear().type(1);
  }

  relatedCharacterSetField() {
    commonLocators
      .ByTextWithTag("span", "Related Information")
      .should("be.visible")
      .click();
    commonLocators.ByControlName("rltdCharSet").clear().type("A");
  }

  relatedFromBIC() {
    // commonLocators.ByTextWithTag('span', 'From').eq(5).should('be.visible').click();
    commonLocators
      .ByControlName("rltdFrBicfi")
      .scrollIntoView({ force: true })
      .dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn2").should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  relatedToBIC() {
    commonLocators.ByTextWithTag("span", "To").should("be.visible").click();
    commonLocators.ByControlName("rltdToBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("K");
    commonLocators.ByID("id_btn2").click().should("be.visible");
    commonLocators.ByTextWithTag("td", "BANGLADESH KRISHI BANK").dblclick();
  }

  businessMsg() {
    commonLocators
      .ByControlName("bizMsgIdr")
      .clear()
      .type(this.businessMsgText);
  }

  relatedBusinessMsgID() {
    // commonLocators.ByTextWithTag('div', 'Related Information').should('be.visible').click();
    commonLocators.ByControlName("rltdBizMsgIdr").clear().type(1);
  }

  assignmentIdentificationField() {
    commonLocators.ByControlName("assgnmtId").clear().type("1");
  }

  assignerBIC() {
    commonLocators.ByControlName("assgnrBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn2").click().should("be.visible");
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  confirmationDialog() {
    commonLocators.inputByPlaceholder(" Search confirmation").click();
    commonLocators
      .ByTextWithTag("div", "CNCL - Cancellation Confirmed")
      .should("be.visible")
      .click();
  }

  cancellationStatusID() {
    commonLocators
      .ByControlName("cxlStsId")
      .should("be.visible")
      .clear()
      .type("1");
  }

  caseIdentificationField() {
    commonLocators
      .ByControlName("caseId")
      .should("be.visible")
      .clear()
      .type("1");
  }

  creatorTypeField() {
    commonLocators.inputByPlaceholder(" Search creator type").click();
    commonLocators
      .ByTextWithTag("div", " Agent (Financial Institution) ")
      .should("be.visible")
      .click();
  }

  agentBIC() {
    commonLocators.ByControlName("cretrBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn2").click().should("be.visible");
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  originalMsgId() {
    commonLocators
      .ByControlName("orgnlMsgId")
      .should("be.visible")
      .clear()
      .type("A");
  }

  originalMsgNameId() {
    commonLocators
      .ByControlName("orgnlMsgNmId")
      .should("be.visible")
      .clear()
      .type("A");
  }

  UETR() {
    commonLocators
      .ByControlName("orgnlUetr")
      .should("be.visible")
      .clear()
      .type("de2da6c9-18be-48d4-8053-867ed90a316a");
  }

  save() {
    commonLocators
      .ByTextWithTag("button", "Save")
      .should("be.visible")
      .click({ force: true });
    cy.get('div[role="alert"]', { timeout: 4000 })
      .should("be.visible")
      .and("contain.text", " message saved successfully ");
  }
}

export default new MX_029_Page();
