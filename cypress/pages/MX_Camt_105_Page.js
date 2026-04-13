/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY } from "../utils/commonUtils";

class MX_Camt_105_Page {
  chooseMessageVariant(text) {
    commonLocators.ByTextWithTag("div", text).should("be.visible").click();
  }

  charSetField() {
    commonLocators.ByControlName("charSet").clear().type("Full Sized");
  }

  inputFromBIC() {
    commonLocators.ByControlName("fromBicfi").dblclick();
    commonLocators
      .inputByPlaceholder("Enter SWIFT code prefix to search...")
      .clear()
      .type("M");
    commonLocators
      .ByAria_Label_Btn("Find SWIFT Code")
      .should("be.visible")
      .click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  inputToBIC() {
    commonLocators.ByControlName("toBicfi").dblclick();
    commonLocators.inputByPlaceholder("SWIFT code search...").clear().type("K");
    commonLocators.ByAria_Label_Btn("Find").click().should("be.visible");
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
    commonLocators.ByControlName("bizMsgIdr").clear().type("Anik");
  }

  ///////////////////////////////////

  relatedCharSetField() {
    commonLocators.ByControlName("charSet").clear().type("Full Sized");
  }

  relatedInputFromBIC() {
    commonLocators.ByControlName("fromBicfi").dblclick();
    commonLocators
      .inputByPlaceholder("Enter SWIFT code prefix to search...")
      .clear()
      .type("M");
    commonLocators
      .ByAria_Label_Btn("Find SWIFT Code")
      .should("be.visible")
      .click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  relatedInputToBIC() {
    commonLocators.ByControlName("toBicfi").dblclick();
    commonLocators.inputByPlaceholder("SWIFT code search...").clear().type("K");
    commonLocators.ByAria_Label_Btn("Find").click().should("be.visible");
    commonLocators.ByTextWithTag("td", "BANGLADESH KRISHI BANK").dblclick();
  }

  relatedFromClearingSystemID() {
    commonLocators
      .inputByPlaceholder(" Search clearing system id code")
      .eq(0)
      .click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  relatedToClearingSystemID() {
    commonLocators
      .inputByPlaceholder(" Search clearing system id code")
      .eq(1)
      .click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  relatedFromMemberID() {
    commonLocators.ByControlName("fromMembId").clear().type(1);
  }

  relatedrelatedFoMemberID() {
    commonLocators.ByControlName("toMembId").clear().type(1);
  }

  relatedFromLei() {
    commonLocators
      .ByControlName("fromLei")
      .clear()
      .type("11111111111111111111");
  }

  relatedToLei() {
    commonLocators.ByControlName("toLei").clear().type("11111111111111111111");
  }

  relatedBusinessMsgID() {
    commonLocators.ByControlName("bizMsgIdr").clear().type("Anik");
  }

  relatedMsgDefinitionID() {
    commonLocators.ByControlName("bizMsgIdr").clear().type("Anik");
  }

  relatedBusinessService() {
    commonLocators.ByControlName("bizMsgIdr").clear().type("Anik");
  }

  relatedMarketDateCreationField() {
    commonLocators
      .ByControlName("creDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  relatedCopyDuplicateField() {
    commonLocators.ByControlName("cpyDplct").should("be.visible").click();
    commonLocators.ByTextWithTag("div", " COPY ").should("be.visible").click();
  }

  relatedPriorityField() {
    commonLocators.ByControlName("prty").click();
    commonLocators
      .ByTextWithTag("div", " Normal ")
      .should("be.visible")
      .click();
  }

  ///////////////////////////////////////////////

  marketDateCreationField() {
    commonLocators
      .ByControlName("creDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  copyDuplicateField() {
    commonLocators.ByControlName("cpyDplct").should("be.visible").click();
    commonLocators.ByTextWithTag("div", " COPY ").should("be.visible").click();
  }

  possibleCopyDuplicateField() {
    commonLocators.ByControlName("psblDplct").should("be.visible").click();
    commonLocators.ByTextWithTag("div", " COPY ").should("be.visible").click();
  }

  priorityField() {
    commonLocators.ByControlName("prty").click();
    commonLocators
      .ByTextWithTag("div", " Normal ")
      .should("be.visible")
      .click();
  }

  marketRegistryField() {
    commonLocators.ByControlName("mktPrctcRegy").clear().type("1");
  }

  marketIDField() {
    commonLocators.ByControlName("mktPrctcId").clear().type("1");
  }

  msgID() {
    commonLocators.ByControlName("GrpHdrmsgId").clear().type("1");
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

export default new MX_Camt_105_Page();
