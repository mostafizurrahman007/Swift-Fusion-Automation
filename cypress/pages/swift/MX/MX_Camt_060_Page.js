/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY, randomString } from "../../utils/commonUtils";

class MX_Camt_060_Page {
  businessMsgText = randomString();

  chooseMessageVariant(text) {
    commonLocators.ByTextWithTag("div", text).should("be.visible").click();
  }

  charSetField() {
    commonLocators.ByControlName("charSet").clear().type("Full Sized");
  }

  inputFromBIC() {
    commonLocators.ByControlName("fromBicfi").clear().type("SEBDBDDH{enter}");
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

  marketRegistryField() {
    commonLocators.ByControlName("mktPrctcRegy").clear().type(123);
  }

  marketPracticeID() {
    commonLocators.ByControlName("mktPrctcId").clear().type(1230);
  }

  marketPracticeCreationDate() {
    commonLocators
      .ByControlName("creDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  groupHeaderMsgID() {
    commonLocators.ByControlName("grpHdrMsgId").clear().type("123");
  }

  groupHeaderCreationDate() {
    commonLocators
      .ByControlName("grpHdrCreDtTm")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  reportingMsgNameID() {
    commonLocators.ByControlName("ReqdMsgNmId").clear().type("123");
  }

  reportingAccountOwnerType() {
    commonLocators.ByControlName("accountOwnerType").click();
    commonLocators.ByTextWithTag("div", " Agent ").should("be.visible").click();
  }

  reportingAccountAgentBIC() {
    commonLocators.ByControlName("bicfi").first().clear().type("SEBDBDDH{enter}");
  }

  reportingPeriodFromDate() {
    commonLocators
      .ByControlName("reptReqFrDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  reportingPeriodToDate() {
    commonLocators
      .ByControlName("reptReqToDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  reportingPeriodType() {
    commonLocators.ByControlName("reptReqTp").click();
    commonLocators.ByTextWithTag("div", " All ").should("be.visible").click();
  }

  save() {
    commonLocators.ByTextWithTag("button", "Save").click({ force: true });
  }
}

export default new MX_Camt_060_Page();
