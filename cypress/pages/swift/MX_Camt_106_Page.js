/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY, randomString } from "../../utils/commonUtils";

class MX_Camt_106_Page {
  businessMsgText = randomString();

  chooseMessageVariant(text) {
    commonLocators.ByControlName("messageVariant").should("be.visible").click();
    commonLocators.ByTextWithTag("div", text).should("be.visible").click();
  }

  charSetField() {
    commonLocators.ByControlName("charSet").clear().type("Full Sized");
  }

  inputFromBIC() {
    commonLocators.ByControlName("fromBicfi").clear().type("SEBDBDDH{enter}");
  }

  inputToBIC() {
    commonLocators.ByControlName("toBicfi").scrollIntoView().focus().dblclick();
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
    commonLocators.ByControlName("fromMmbId").clear().type(1);
  }

  toMemberID() {
    commonLocators.ByControlName("toMmbId").clear().type(1);
  }

  fromLei() {
    commonLocators
      .ByControlName("fromLei")
      .clear()
      .type("11111111111111111111", { force: true });
  }

  toLei() {
    commonLocators
      .ByControlName("toLei")
      .clear()
      .type("11111111111111111111", { force: true });
  }

  businessMsg() {
    commonLocators
      .ByControlName("bizMsgIdr")
      .clear()
      .type(this.businessMsgText);
  }

  marketPracticeCopyDuplicate() {
    commonLocators.ByControlName("cpyDplct").click();
    commonLocators.ByTextWithTag("div", " COPY ").should("be.visible").click();
  }

  marketPracticePossibleDuplicate() {
    commonLocators.ByControlName("pssblDplct").click();
    commonLocators.ByTextWithTag("div", " Yes ").should("be.visible").click();
  }

  marketPracticePriority() {
    commonLocators.ByControlName("prty").click();
    commonLocators.ByTextWithTag("div", " High ").should("be.visible").click();
  }

  totalChargesAmt() {
    commonLocators.ByControlName("ttlChrgsPerRcrdAmt").clear().type(1000);
  }

  totalChargesAmtCurrency() {
    commonLocators
      .ByControlName("ttlChrgsPerRcrdAmtCcy")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  chargeBrkdownCurrency() {
    commonLocators.ByControlName("amtCcy").should("be.visible").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  chargeBrkdownAmt() {
    commonLocators.ByControlName("amt").clear().type(1000);
  }

  underlyingTransUETR() {
    commonLocators
      .ByControlName("undrlygTxUetr")
      .should("be.visible")
      .clear()
      .type("de2da6c9-18be-48d4-8053-867ed90a316a");
  }

  save() {
    commonLocators.ByTextWithTag("button", "Save").click({ force: true });
  }
}

export default new MX_Camt_106_Page();
