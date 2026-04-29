/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY, randomString } from "../../utils/commonUtils";

class MX_Camt_105_Page {
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

  // Related Field Started

  relatedCharSetField() {
    commonLocators.ByControlName("rltdCharSet").clear().type("Related");
  }

  relatedInputFromBIC() {
    commonLocators.ByControlName("rltdFrBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn2").should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  relatedInputToBIC() {
    commonLocators.ByControlName("rltdToBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("K");
    commonLocators.ByID("id_btn2").click().should("be.visible");
    commonLocators.ByTextWithTag("td", "BANGLADESH KRISHI BANK").dblclick();
  }

  relatedFromClearingSystemID() {
    commonLocators.ByControlName("rltdFrmClrSysIdCd").click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  relatedToClearingSystemID() {
    commonLocators.ByControlName("rltdToClrSysIdCd").click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  relatedFromMemberID() {
    commonLocators.ByControlName("rltdFrmMembId").clear().type(123);
  }

  relatedToMemberID() {
    commonLocators.ByControlName("rltdToMembId").clear().type(124);
  }

  relatedFromLei() {
    commonLocators
      .ByControlName("rltdFrmLei")
      .clear()
      .type("11111111111111111111", { force: true });
  }

  relatedToLei() {
    commonLocators
      .ByControlName("rltdToLei")
      .clear()
      .type("11111111111111111111", { force: true });
  }

  relatedBusinessMsgID() {
    commonLocators.ByControlName("rltdBizMsgIdr").clear().type("Anik");
  }

  relatedMsgDefinitionID() {
    commonLocators.ByControlName("rltdMsgDefIdr").clear().type("Anik");
  }

  relatedBusinessService() {
    commonLocators.ByControlName("rltdBizSvc").clear().type("Anik");
  }

  relatedMarketDateCreationField() {
    commonLocators
      .ByControlName("rltdCreDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  relatedCopyDuplicateField() {
    commonLocators.ByControlName("rltdCpyDplct").should("be.visible").click();
    commonLocators.ByTextWithTag("div", " COPY ").should("be.visible").click();
  }

  relatedPriorityField() {
    commonLocators.ByControlName("rltdPriority").click();
    commonLocators
      .ByTextWithTag("div", " HIGH - High Priority ")
      .should("be.visible")
      .click();
  }

  // Related Field Ended

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
    commonLocators
      .ByControlName("psblDplct")
      .scrollIntoView()
      .should("be.visible")
      .click();
    commonLocators.ByTextWithTag("div", " COPY ").should("be.visible").click();
  }

  priorityField() {
    commonLocators.ByControlName("prty").click();
    commonLocators
      .ByTextWithTag("div", " HIGH - High Priority ")
      .should("be.visible")
      .click();
  }

  marketRegistryField() {
    commonLocators.ByControlName("mktPrctcRegy").clear().type("123");
  }

  marketIDField() {
    commonLocators.ByControlName("mktPrctcId").clear().type("123");
  }

  groupMsgID() {
    commonLocators.ByControlName("grpHdrMsgId").clear().type("123");
  }

  groupChargeCreationDate() {
    commonLocators
      .ByControlName("grpHdrCreDtTm")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  chargeRequestorBIC() {
    commonLocators.ByControlName("chrgsRqstrBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn2").should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  crgReqClrMbrCode() {
    commonLocators.ByControlName("clrSysMmbIdCd").clear().type("123");
  }

  crgReqClrMbrID() {
    commonLocators
      .ByControlName("chrgsRqstrLei")
      .clear()
      .type("111111111111111111111", { force: true });
  }

  crgReqClrLei() {
    commonLocators.ByControlName("clrSysMmbIdMmbId").clear().type("1");
  }

  chargesIdentification() {
    commonLocators.ByControlName("perTxChrgsId").clear().type("456");
  }

  underlyingTrnsMsgID() {
    commonLocators.ByControlName("undrlygTxMsgId").clear().type("123");
  }

  underlyingTrnsMsgNameID() {
    commonLocators.ByControlName("undrlygTxmsgNmId").clear().type("Ank");
  }

  // Total Charges per record section
  numberOfChequesBrkdwn() {
    commonLocators
      .ByControlName("nbOfChrgsBrkdwnItms")
      .clear()
      .type("1", { force: true });
  }

  totalChargesAmt() {
    commonLocators
      .ByControlName("ttlChrgsAmt")
      .clear()
      .type("1000", { force: true });
  }

  totalChargeCurrencyField() {
    commonLocators.ByControlName("ttlChrgsAmtCcy").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  totalCrgDebitCreditIndicator() {
    commonLocators.ByControlName("cdtDbtInd").click();
    commonLocators.ByTextWithTag("div", " DBIT ").should("be.visible").click();
  }

  // CHarge Item #1
  crgItem1Amt() {
    commonLocators.ByControlName("chrgsBrkdwnAmt").clear().type("1000");
  }

  crgItem1Currency() {
    commonLocators.ByControlName("chrgsPerRcrdAmtCcy").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  crgItem1DebitCreditIndicator() {
    commonLocators.ByControlName("chrgsBrkdwnCdtDbtInd").click();
    commonLocators.ByTextWithTag("div", " DBIT ").should("be.visible").click();
  }

  crgItem1TypeCode() {
    commonLocators.ByControlName("chrgsBrkdwnTpCd").click();
    commonLocators
      .ByTextWithTag("div", " COMM - Commission ")
      .should("be.visible")
      .click();
  }

  crgBrkdwnValueDate() {
    commonLocators
      .ByControlName("valDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  // Multiple Charges Section Start
  mulNumberOfChequesBrkdwn() {
    commonLocators
      .ByControlName("nbOfChrgsBrkdwnItmsMul")
      .clear()
      .type("2", { force: true });
  }

  mulTotalChargesAmt() {
    commonLocators
      .ByControlName("ttlChrgsAmtMul")
      .clear()
      .type("2000", { force: true });
  }

  mulTotalChargeCurrencyField() {
    commonLocators.ByControlName("ttlChrgsAmtCcyMul").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  mulTotalCrgDebitCreditIndicator() {
    commonLocators.ByControlName("cdtDbtIndMul").click();
    commonLocators.ByTextWithTag("div", " DBIT ").should("be.visible").click();
  }

  mulChargesIdentification() {
    commonLocators.ByControlName("perTxChrgsId").clear().type("456");
  }

  // Charge Record #1
  mulRecordIdentification() {
    commonLocators.ByControlName("record0RcrdId").clear().type("456");
  }

  mulChargeRequestorBIC() {
    commonLocators.ByControlName("record0ChrgsRqstrBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn2").should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  mulCrgReqClrMbrCode() {
    commonLocators
      .ByControlName("record0ChrgsRqstrClrSysMmbIdCd")
      .clear()
      .type("123");
  }

  mulCrgReqClrMbrID() {
    commonLocators
      .ByControlName("record0ChrgsRqstrClrSysMmbIdMmbId")
      .clear()
      .type("111111111111111111111");
  }

  mulCrgReqClrLei() {
    commonLocators
      .ByControlName("record0ChrgsRqstrLei")
      .clear()
      .type("11111111111111111111", { force: true });
  }

  // Total Charges per record section in multiple
  mulNumberOfChequesBrkdwn1() {
    commonLocators
      .ByControlName("record0NbOfChrgsBrkdwnItms")
      .clear()
      .type("2", { force: true });
  }

  mulTotalChargesAmt1() {
    commonLocators
      .ByControlName("record0TtlChrgsAmt")
      .clear()
      .type("1000", { force: true });
  }

  mulTotalChargeCurrencyField1() {
    commonLocators.ByControlName("record0TtlChrgsAmtCcy").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  mulTotalCrgDebitCreditIndicator1() {
    commonLocators.ByControlName("record0CdtDbtInd").click();
    commonLocators.ByTextWithTag("div", " DBIT ").should("be.visible").click();
  }

  // CHarge Item #1
  mulCrgItem1Amt() {
    commonLocators.ByControlName("chrgsBrkdwnAmt").eq(0).clear().type("500");
  }

  mulCrgItem1Currency() {
    commonLocators.ByControlName("chrgsPerRcrdAmtCcy").eq(0).click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  mulCrgItem1DebitCreditIndicator() {
    commonLocators.ByControlName("chrgsBrkdwnCdtDbtInd").eq(0).click();
    commonLocators.ByTextWithTag("div", " DBIT ").should("be.visible").click();
  }

  mulCrgItem1TypeCode() {
    commonLocators.ByControlName("chrgsBrkdwnTpCd").eq(0).click();
    commonLocators
      .ByTextWithTag("div", " COMM - Commission ")
      .should("be.visible")
      .click();
  }

  // CHarge Item #2 in 1st record
  mulCrgItem2Amt() {
    commonLocators.ByControlName("chrgsBrkdwnAmt").eq(1).clear().type("500");
  }

  mulCrgItem2Currency() {
    commonLocators.ByControlName("chrgsPerRcrdAmtCcy").eq(1).click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  mulCrgItem2DebitCreditIndicator() {
    commonLocators.ByControlName("chrgsBrkdwnCdtDbtInd").eq(1).click();
    commonLocators.ByTextWithTag("div", " DBIT ").should("be.visible").click();
  }

  mulCrgItem2TypeCode() {
    commonLocators.ByControlName("chrgsBrkdwnTpCd").eq(1).click();
    commonLocators
      .ByTextWithTag("div", " COMM - Commission ")
      .should("be.visible")
      .click();
  }

  // Charge Record #2
  mulRecordIdentification2() {
    commonLocators.ByControlName("record1RcrdId").clear().type("456");
  }

  mulChargeRequestorBIC2() {
    commonLocators.ByControlName("record1ChrgsRqstrBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn2").should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  mulCrgReqClrMbrCode2() {
    commonLocators
      .ByControlName("record1ChrgsRqstrClrSysMmbIdCd")
      .clear()
      .type("123");
  }

  mulCrgReqClrMbrID2() {
    commonLocators
      .ByControlName("record1ChrgsRqstrClrSysMmbIdMmbId")
      .clear()
      .type("111111111111111111111");
  }

  mulCrgReqClrLei2() {
    commonLocators
      .ByControlName("record1ChrgsRqstrLei")
      .clear()
      .type("111111111111111111111", { force: true });
  }

  // Total Charges per record section in multiple
  mulNumberOfChequesBrkdwn2() {
    commonLocators
      .ByControlName("record1NbOfChrgsBrkdwnItms")
      .clear()
      .type("2", { force: true });
  }

  mulTotalChargesAmt2() {
    commonLocators
      .ByControlName("record1TtlChrgsAmt")
      .clear()
      .type("1000", { force: true });
  }

  mulTotalChargeCurrencyField2() {
    commonLocators.ByControlName("record1TtlChrgsAmtCcy").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  mulTotalCrgDebitCreditIndicator2() {
    commonLocators.ByControlName("record1CdtDbtInd").click();
    commonLocators.ByTextWithTag("div", " DBIT ").should("be.visible").click();
  }

  // Charge Item #1 in 2nd record
  mulCrgItem3Amt() {
    commonLocators.ByControlName("chrgsBrkdwnAmt").eq(2).clear().type("500");
  }

  mulCrgItem3Currency() {
    commonLocators.ByControlName("chrgsPerRcrdAmtCcy").eq(2).click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  mulCrgItem3DebitCreditIndicator() {
    commonLocators.ByControlName("chrgsBrkdwnCdtDbtInd").eq(2).click();
    commonLocators.ByTextWithTag("div", " DBIT ").should("be.visible").click();
  }

  mulCrgItem3TypeCode() {
    commonLocators.ByControlName("chrgsBrkdwnTpCd").eq(2).click();
    commonLocators
      .ByTextWithTag("div", " COMM - Commission ")
      .should("be.visible")
      .click();
  }

  // Charge Item #2 in 2nd record
  mulCrgItem4Amt() {
    commonLocators.ByControlName("chrgsBrkdwnAmt").eq(3).clear().type("500");
  }

  mulCrgItem4Currency() {
    commonLocators.ByControlName("chrgsPerRcrdAmtCcy").eq(3).click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  mulCrgItem4DebitCreditIndicator() {
    commonLocators.ByControlName("chrgsBrkdwnCdtDbtInd").eq(3).click();
    commonLocators.ByTextWithTag("div", " DBIT ").should("be.visible").click();
  }

  mulCrgItem4TypeCode() {
    commonLocators.ByControlName("chrgsBrkdwnTpCd").eq(3).click();
    commonLocators
      .ByTextWithTag("div", " COMM - Commission ")
      .should("be.visible")
      .click();
  }

  /////////////////////////

  crgBrkdwnValueDate() {
    commonLocators
      .ByControlName("valDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  //////////////////////////////////

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

    // Target the success toast specifically, not just the first alert
    cy.get('.toast-success div[role="alert"]', { timeout: 4000 })
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
