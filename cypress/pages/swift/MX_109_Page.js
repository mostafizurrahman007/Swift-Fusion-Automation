/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY, randomString } from "../../utils/commonUtils";

class MX_109_Page {
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

  fromMemberID() {
    commonLocators.ByControlName("fromMembId").clear().type(1);
  }

  toMemberID() {
    commonLocators.ByControlName("toMembId").clear().type(1);
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

  businessMsg() {
    commonLocators.ByControlName("bizMsgIdr").clear().type(this.businessMsgText);
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

  copyDuplicateField() {
    commonLocators.inputByPlaceholder(" Search copy duplicate").click();
    commonLocators.ByTextWithTag("div", " COPY ").should("be.visible").click();
  }

  priorityField() {
    commonLocators.ByControlName("priority").click();
    commonLocators
      .ByTextWithTag("div", " Normal ")
      .should("be.visible")
      .click();
  }

  registryField() {
    commonLocators.ByControlName("CtrlSum").clear().type("1");
  }

  numberOfCheques() {
    commonLocators.ByControlName("GrpHdrNbOfChqs").clear().type("1");
  }

  chequeIdentificationField() {
    commonLocators
      .ByControlName("ChqInstrId")
      .should("be.visible")
      .clear()
      .type("A");
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

  chequeEffectiveDateField() {
    commonLocators
      .ByControlName("ectvDtDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  chequeCancellationOriginatorField() {
    commonLocators.ByControlName("orgtr").click();
    commonLocators
      .ByTextWithTag("div", " Drawee Agent ")
      .should("be.visible")
      .click();
  }

  codeField() {
    commonLocators.inputByPlaceholder(" Search code").click();
    commonLocators
      .ByTextWithTag("div", " Accepted ")
      .should("be.visible")
      .click();
  }

  chequeCancellationAdditionalInfoField() {
    commonLocators
      .ByControlName("AddtlInf")
      .should("be.visible")
      .clear()
      .type("A");
  }

  save() {
    commonLocators.ByTextWithTag("button", "Save").click({ force: true });

    cy.get('div[role="alert"]', { timeout: 4000 })
      .first()
      .should("be.visible")
      .invoke("text")
      .then((msg) => {
        const alertMessage = msg.trim();
        cy.log("Alert Message: " + alertMessage);

        expect(alertMessage.toLowerCase()).to.include("saved");
      });
  }
}

export default new MX_109_Page();
