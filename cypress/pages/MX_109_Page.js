/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY } from "../utils/dateUtils";

class MX_109_Page {
  charSetField() {
    commonLocators.ByControlName("charSet").clear().type("A");
  }

  inputFromBIC() {
    commonLocators.ByControlName("fromBicfi").dblclick();
    commonLocators.inputByPlaceholder("SWIFT code search...").clear().type("M");
    commonLocators.ByAria_Label_Btn("Find").should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  inputToBIC() {
    commonLocators.ByControlName("toBicfi").dblclick();
    commonLocators.inputByPlaceholder("SWIFT code search...").clear().type("K");
    commonLocators.ByAria_Label_Btn("Find").click().should("be.visible");
    commonLocators.ByTextWithTag("td", "BANGLADESH KRISHI BANK").dblclick();
  }

  businessMsg() {
    commonLocators.ByControlName("bizMsgIdr").clear().type("A");
  }

  msgID() {
    commonLocators.ByControlName("GrpHdrmsgId").clear().type("1");
  }

  dateCreationField() {
    commonLocators
      .ByControlName("GrpHdrcreDtTm")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  numberOfCheques() {
    commonLocators.ByControlName("GrpHdrNbOfChqs").clear().type("1");
  }

  originalIdentification() {
    commonLocators.ByControlName("OrgnlInstrId").clear().type(1);
  }

  chequeNumber() {
    commonLocators.ByControlName("ChqChqNb").clear().type("1");
  }

  issueDateField() {
    commonLocators
      .ByControlName("IsseDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  currencyField() {
    commonLocators.inputByPlaceholder(" Search currency").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  amountField() {
    commonLocators
      .inputByPlaceholder("Enter Amount")
      .should("be.visible")
      .clear()
      .type("1");
  }

  codeField() {
    commonLocators.inputByPlaceholder(" Search code").click();
    commonLocators
      .ByTextWithTag("div", " Accepted ")
      .should("be.visible")
      .click();
  }

  save() {
    commonLocators
      .ByTextWithTag("button", "Save")
      .should("be.visible")
      .click({ force: true });
    cy.get('div[role="alert"]', { timeout: 4000 })
      .should("be.visible")
      .and("contain.text", " message saved successfully! ");
  }
}

export default new MX_109_Page();
