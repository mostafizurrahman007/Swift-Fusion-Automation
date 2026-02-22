/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../support/locators/commonLocators";

class OldSwift_Camt_109_Page {
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

  msgID() {
    commonLocators.ByControlName("GrpHdrmsgId").clear().type("1");
  }

  dateCreationField() {
    commonLocators
      .ByControlName("GrpHdrcreDtTm")
      .invoke("val", "10/02/2026")
      .trigger("change");
  }

  numberOfCheques() {
    commonLocators.ByControlName("GrpHdrNbOfChqs").clear().type("1");
  }

  originalIdentification() {
    commonLocators
      .ByControlName("OrgnlInstrId")
      .invoke("val", "10/02/2026")
      .trigger("change");
  }

  chequeNumber() {
    commonLocators.ByControlName("ChqChqNb").clear().type("1");
  }

  issueDateField() {
    commonLocators
      .ByControlName("IsseDt")
      .invoke("val", "10/02/2026")
      .trigger("change");
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
      .ByTextWithTag("p", "Save")
      .should("be.visible")
      .click({ force: true });

    cy.get("#toast-container", { timeout: 4000 })
      .should("be.visible")
      .invoke("text")
      .then((msg) => {
        cy.log(`Toast message: ${msg.trim()}`);
      });
  }
}

export default new OldSwift_Camt_109_Page();
