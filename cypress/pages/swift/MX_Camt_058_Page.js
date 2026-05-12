/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY, randomString } from "../../utils/commonUtils";

class MX_Camt_058_Page {
  businessMsgText = randomString();

  chooseMessageVariant(text) {
    commonLocators.ByTextWithTag("div", text).should("be.visible").click();
  }

  charSetField() {
    commonLocators.ByControlName("charSet").clear().type("Full Sized");
  }

  inputFromBIC() {
    commonLocators.ByControlName("fromBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("S");
    commonLocators.ByID("id_btn2").should("be.visible").click();
    commonLocators
      .ByTextWithTag("td", "HEAD OFFICE, SOUTHEAST BANK LIMITED")
      .dblclick();
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

  marketPracticeCreationDate() {
    commonLocators
      .ByControlName("creDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  marketPracticeCopyDuplicate() {
    commonLocators.ByControlName("cpyDplct").click();
    commonLocators
      .ByTextWithTag("div", "Copy Duplicate")
      .should("be.visible")
      .click();
  }

  marketPracticePossibleDuplicate() {
    commonLocators.ByControlName("psblDplct").click();
    commonLocators.ByTextWithTag("div", "Yes").should("be.visible").click();
  }

  marketPracticePriority() {
    commonLocators.ByControlName("priority").click();
    commonLocators.ByTextWithTag("div", "High").should("be.visible").click();
  }

  groupHeaderMsgID() {
    commonLocators.ByControlName("msgId").clear().type("123");
  }

  groupHeaderCreationDate() {
    commonLocators
      .ByControlName("creDtTm")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  originalMsgNotification() {
    commonLocators.ByControlName("orgnlMsgId").clear().type("Good");
  }

  originalNotificationID() {
    commonLocators.ByControlName("orgnlNtfctnId").clear().type("Good");
  }

  debatorType() {
    commonLocators.ByControlName("dbtrType").first().click();
    commonLocators.ByTextWithTag("div", " Agent ").should("be.visible").click();
  }

  debatorAgentBIC() {
    commonLocators.ByControlName("bicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("S");
    commonLocators.ByID("id_btn2").should("be.visible").click();
    commonLocators
      .ByTextWithTag("td", "HEAD OFFICE, SOUTHEAST BANK LIMITED")
      .dblclick();
  }

  originalItemNotification() {
    commonLocators.ByControlName("itmId").clear().type("Good");
  }

  totalAmountCurrencyField() {
    commonLocators.ByControlName("ttlAmtCcy").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  totalAmountField() {
    commonLocators.ByControlName("ttlAmt").clear().type(5000);
  }

  reasonCodeField() {
    commonLocators.ByControlName("rsnCd").click();
    commonLocators
      .ByTextWithTag("Duplicate Payment")
      .should("be.visible")
      .click();
  }
}

export default new MX_Camt_058_Page();
