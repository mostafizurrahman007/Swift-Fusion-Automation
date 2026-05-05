/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY, randomString } from "../../utils/commonUtils";

class MX_Camt_056_Page {
  businessMsgText = randomString();

  chooseMessageVariant(text) {
    commonLocators.ByTextWithTag("div", text).should("be.visible").click();
  }

  charSetField() {
    commonLocators.ByControlName("charSet").clear().type("Full Sized");
  }

  inputFromBIC() {
    commonLocators.ByControlName("fromBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn").eq(1).should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  inputToBIC() {
    commonLocators.ByControlName("toBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("K");
    commonLocators.ByID("id_btn").eq(1).click().should("be.visible");
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
    commonLocators.ByControlName("mktPrctcRegy").clear().type("123");
  }

  marketIDField() {
    commonLocators.ByControlName("mktPrctcId").clear().type("123");
  }

  copyDuplicateField() {
    commonLocators.ByControlName("cpyDplct").should("be.visible").click();
    commonLocators.ByTextWithTag("div", " COPY ").should("be.visible").click();
  }
  fiAssignmentID() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqAssignmentId")
      .clear()
      .type("1");
  }

  assignerAgentBicfi() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqAssignmentAssgnrAgentFinInstnIdBICFI")
      .dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn").eq(1).should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  assignerAgentClearingSystemID() {
    commonLocators
      .ByControlName(
        "FIToFIPmtCxlReqAssignmentAssgnrAgentFinInstnIdClrSysMmbIdClrSysIdCd",
      )
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  assignerAgentMemberID() {
    commonLocators
      .ByControlName(
        "FIToFIPmtCxlReqAssignmentAssgnrAgentFinInstnIdClrSysMmbIdMmbId",
      )
      .clear()
      .type(1);
  }

  assignerAgentLei() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqAssignmentAssgnrAgentFinInstnIdLEI")
      .clear()
      .type("11111111111111111111", { force: true });
  }

  assigneeAgentBicfi() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqAssignmentAssgneAgentFinInstnIdBICFI")
      .dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn").eq(1).should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  assigneeAgentClearingSystemID() {
    commonLocators
      .ByControlName(
        "FIToFIPmtCxlReqAssignmentAssgneAgentFinInstnIdClrSysMmbIdClrSysIdCd",
      )
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  assigneeAgentMemberID() {
    commonLocators
      .ByControlName(
        "FIToFIPmtCxlReqAssignmentAssgneAgentFinInstnIdClrSysMmbIdMmbId",
      )
      .clear()
      .type(1);
  }

  assigneeAgentLei() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqAssignmentAssgneAgentFinInstnIdLEI")
      .clear()
      .type("11111111111111111111", { force: true });
  }

  underlyingCancellationID() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfCxlId")
      .clear()
      .type("121");
  }

  underlyingCaseID() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfCaseId")
      .clear()
      .type("12345");
  }

  underlyingPartyName() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfCaseCretrPtyNm")
      .clear()
      .type("Anik");
  }

  underlyingOrganizationIDAnyBIC() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfCaseCretrPtyIdOrgIdAnyBIC")
      .dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn").eq(1).should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  underlyingAgentBicfi() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfCaseAgtFinInstnIdBICFI")
      .dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn").eq(1).should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  underlyingCountryOfResidence() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfCaseCretrPtyCtryOfRes")
      .click();
    commonLocators
      .ByTextWithTag("div", "001 - Bangladesh")
      .should("be.visible")
      .click();
  }

  originalMessageID() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfOrgnlGrpInfOrgnlMsgId")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type("12456");
  }

  originalMessageNameID() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfOrgnlGrpInfOrgnlMsgNmId")
      .should("be.visible")
      .clear()
      .type("okay");
  }

  originalEndToEndID() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfOrgnlEndToEndId")
      .should("be.visible")
      .clear()
      .type(12345);
  }

  originalUETR() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfOrgnlUETR")
      .should("be.visible")
      .clear()
      .type("de2da6c9-18be-48d4-8053-867ed90a316a");
  }

  originalSettlementCurrencyField() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfOrgnlIntrBkSttlmAmtCcy")
      .click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  originalSettlementAmt() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfOrgnlIntrBkSttlmAmt")
      .should("be.visible")
      .clear()
      .type(2000);
  }

  originalSettlementDate() {
    commonLocators
      .ByControlName("FIToFIPmtCxlReqUndrlygTxInfOrgnlIntrBkSttlmDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  originatorName() {
    commonLocators.ByControlName("TxInfRtrRsnInfOrgtrNm").clear().type('Anik');
  }

  reasonCodeField() {
    commonLocators.ByControlName("OriginalEndToEndIdentification").click();
    commonLocators
      .ByTextWithTag("AGNT - Incorrect Agent")
      .should("be.visible")
      .click();
  }

  reasonCodeAdditionalInfo1() {
    commonLocators.ByControlName("TxInfRtrRsnInfAddtlInf1").clear().type('All done');
  }

  save() {
    commonLocators.ByTextWithTag("button", "Save").click({ force: true });
  }
}

export default new MX_Camt_056_Page();
