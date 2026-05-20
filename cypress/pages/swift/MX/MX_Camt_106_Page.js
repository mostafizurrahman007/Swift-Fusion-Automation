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

  // Hidden panel related field
  relatedCharSetField() {
    commonLocators
      .ByPanelID("expansion-header-1")
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click();
    commonLocators.ByControlName("rltdCharSet").clear().type("Related");
  }

  //Hidden Related for Multiple Charge page

  mulRelatedCharSetField() {
    commonLocators
      .ByPanelID("expansion-header-1")
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click();
    commonLocators.ByControlName("rltdCharSet").clear().type("Related");
  }

  mulRelatedInputFromBIC() {
    commonLocators
      .ByPanelID("expansion-header-31")
      .should("be.visible")
      .click();
    commonLocators
      .ByControlName("rltdFromBicfi")
      .clear()
      .type("SEBDBDDH{enter}");
  }

  mulRelatedInputToBIC() {
    commonLocators
      .ByPanelID("expansion-header-32")
      .should("be.visible")
      .click();
    commonLocators.ByControlName("rltdToBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("K");
    commonLocators.ByID("id_btn2").click().should("be.visible");
    commonLocators.ByTextWithTag("td", "BANGLADESH KRISHI BANK").dblclick();
  }

  //////////////////////////

  relatedInputFromBIC() {
    commonLocators
      .ByPanelID("expansion-header-19")
      .should("be.visible")
      .click();
    commonLocators
      .ByControlName("rltdFromBicfi")
      .clear()
      .type("SEBDBDDH{enter}");
  }

  relatedInputToBIC() {
    commonLocators
      .ByPanelID("expansion-header-20")
      .should("be.visible")
      .click();
    commonLocators.ByControlName("rltdToBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("K");
    commonLocators.ByID("id_btn2").click().should("be.visible");
    commonLocators.ByTextWithTag("td", "BANGLADESH KRISHI BANK").dblclick();
  }

  relatedFromClearingSystemID() {
    commonLocators.ByControlName("rltdFromClrSysIdCd").click();
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
    commonLocators.ByControlName("rltdFromMmbId").clear().type(123);
  }

  relatedToMemberID() {
    commonLocators.ByControlName("rltdToMmbId").clear().type(124);
  }

  relatedFromLei() {
    commonLocators
      .ByControlName("rltdFromLei")
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
    commonLocators.ByControlName("rltdPrty").click();
    commonLocators.ByTextWithTag("div", " High ").should("be.visible").click();
  }

  // Hidden panel related field close

  chargesRequestorBIC() {
    commonLocators
      .ByControlName("chrgsRqstrBicfi")
      .clear()
      .type("SEBDBDDH{enter}");
  }

  chargesRequestorClearingSystemID() {
    commonLocators.ByControlName("chrgsRqstrClrSysIdCd").click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  chargesRequestorMemberID() {
    commonLocators.ByControlName("chrgsRqstrMmbId").clear().type(1);
  }

  chargesRequestorLei() {
    commonLocators
      .ByControlName("chrgsRqstrLei")
      .clear()
      .type(11111111111111111111);
  }

  // For Multiple charge

  mulChargesRequestorBIC1() {
    commonLocators
      .ByControlName("record0ChrgsRqstrBicfi")
      .clear()
      .type("SEBDBDDH{enter}");
  }

  mulChargesRequestorClearingSystemID1() {
    commonLocators.ByControlName("record0ChrgsRqstrClrSysIdCd").click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  mulChargesRequestorMemberID1() {
    commonLocators.ByControlName("record0ChrgsRqstrMmbId").clear().type(1);
  }

  mulChargesRequestorLei1() {
    commonLocators
      .ByControlName("record0ChrgsRqstrLei")
      .clear()
      .type(11111111111111111111);
  }

  mulChargesRequestorName1() {
    commonLocators.ByControlName("record0ChrgsRqstrNm").clear().type("Anik");
  }

  ////////////////////////////

  // Postal addresss optional

  crgPayReqPostalDep() {
    commonLocators
      .ByPanelID("expansion-header-10")
      .should("be.visible")
      .click();
    commonLocators.ByControlName("chrgsRqstrDept").clear().type("Accounts");
  }

  crgPayReqPostalStreet() {
    commonLocators.ByControlName("chrgsRqstrStrtNm").clear().type("Mirpur");
  }

  crgPayReqPostalTown() {
    commonLocators.ByControlName("chrgsRqstrTwnNm").clear().type("Dhaka");
  }

  crgPayReqPostalDistrict() {
    commonLocators.ByControlName("chrgsRqstrDstrctNm").clear().type("Dhaka");
  }

  crgPayReqPostalCountry() {
    commonLocators.ByControlName("chrgsRqstrCtry").should("be.visible").click();
    commonLocators
      .ByTextWithTag("div", " 001 - Bangladesh ")
      .should("be.visible")
      .click();
  }

  // Postal address close

  chargesAccountAgentBIC() {
    commonLocators
      .ByControlName("chrgsAcctAgtBicfi")
      .clear()
      .type("SEBDBDDH{enter}");
  }

  chargesAccountAgentClearingSystemID() {
    commonLocators.ByControlName("chrgsAcctAgtClrSysIdCd").click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  chargesAccountAgentMemberID() {
    commonLocators.ByControlName("chrgsAcctAgtMmbId").clear().type(1);
  }

  chargesAccountAgentLei() {
    commonLocators
      .ByControlName("chrgsAcctAgtLei")
      .clear()
      .type(11111111111111111111);
  }

  crgAccAgentAccountIDType() {
    commonLocators
      .ByControlName("chrgsAcctAgtAcctIdType")
      .should("be.visible")
      .click();
    commonLocators.ByTextWithTag("div", " IBAN ").should("be.visible").click();
  }

  crgAccAgentAccountIBAN() {
    commonLocators
      .ByControlName("chrgsAcctAgtAcctIban")
      .clear()
      .type("GB00 XXXX 0000 0000 0000 00");
  }

  crgAccAgentAccountTypeOptional() {
    commonLocators
      .ByControlName("chrgsAcctAgtAcctTpType")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " Proprietary ")
      .should("be.visible")
      .click();
  }

  crgAccAgentAccountTypeProprietary() {
    commonLocators
      .ByControlName("chrgsAcctAgtAcctTpPrtry")
      .clear()
      .type("Savings");
  }

  crgAccAgentAccountCurrency() {
    commonLocators
      .ByControlName("chrgsAcctAgtAcctCcy")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  crgAccAgentAccountName() {
    commonLocators
      .ByControlName("chrgsAcctAgtAcctNm")
      .clear()
      .type("Savings Account");
  }

  crgAccAgentAccountProxyTypeOptional() {
    commonLocators
      .ByControlName("chrgsAcctAgtAcctPrxyTpType")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " Proprietary ")
      .should("be.visible")
      .click({ force: true });
  }
  // For Multiple charge
  mulTotalNumberOfChargesRecords() {
    commonLocators.ByControlName("ttlChrgsNbOfRcrds").clear().type(1);
  }

  mulTotalChargesAmt() {
    commonLocators.ByControlName("ttlChrgsAmt").clear().type(1000);
  }

  mulTotalChargesAmtCurrency() {
    commonLocators.ByControlName("ttlChrgsCcy").should("be.visible").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  ////////////////

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

  chargeBrkdownTypeCode() {
    commonLocators.ByControlName("tpCd").should("be.visible").click();
    commonLocators
      .ByTextWithTag("div", " COMM - Commission ")
      .should("be.visible")
      .click();
  }

  underlyingMsgID() {
    commonLocators.ByControlName("undrlygTxMsgId").clear().type(111);
  }

  underlyingAccServiceRef() {
    commonLocators.ByControlName("undrlygTxAcctSvcrRef").clear().type("ok");
  }

  underlyingPaymentInfoID() {
    commonLocators.ByControlName("undrlygTxPmtInfId").clear().type(12350);
  }

  underlyingEnd2EndID() {
    commonLocators.ByControlName("undrlygTxEndToEndId").clear().type(12345);
  }

  underlyingTransUETR() {
    commonLocators
      .ByControlName("undrlygTxUetr")
      .should("be.visible")
      .clear()
      .type("de2da6c9-18be-48d4-8053-867ed90a316a");
  }

  underlyingTransID() {
    commonLocators.ByControlName("undrlygTxTxId").clear().type(121);
  }

  underlyingMandateID() {
    commonLocators.ByControlName("undrlygTxMndtId").clear().type(122);
  }

  underlyingChequeNumber() {
    commonLocators.ByControlName("undrlygTxChqNb").clear().type(123456789);
  }

  underlyingAccountOwnerTransID() {
    commonLocators.ByControlName("undrlygTxAcctOwnrTxId").clear().type(121);
  }

  underlyingAccountServerTransID() {
    commonLocators.ByControlName("undrlygTxAcctSvcrTxId").clear().type(121);
  }

  underlyingProcessingID() {
    commonLocators.ByControlName("undrlygTxPrcgId").clear().type(12567);
  }

  debatorAgentBIC() {
    commonLocators
      .ByControlName("dbtrAgtBicfi")
      .clear()
      .type("SEBDBDDH{enter}");
  }

  debatorAgentClearingSystemID() {
    commonLocators.ByControlName("dbtrAgtClrSysIdCd").click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  debatorAgentMemberID() {
    commonLocators.ByControlName("dbtrAgtMmbId").clear().type(1);
  }

  debatorAgentLei() {
    commonLocators
      .ByControlName("dbtrAgtLei")
      .clear()
      .type(11111111111111111111);
  }

  debatorAgentAccountIDType() {
    commonLocators
      .ByControlName("dbtrAgtAcctIdType")
      .should("be.visible")
      .click();
    commonLocators.ByTextWithTag("div", " IBAN ").should("be.visible").click();
  }

  debatorAgentAccountIBAN() {
    commonLocators
      .ByControlName("dbtrAgtAcctIban")
      .clear()
      .type("GB00 XXXX 0000 0000 0000 00");
  }

  debatorAgentAccountTypeOptional() {
    commonLocators
      .ByControlName("dbtrAgtAcctTpType")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " Proprietary ")
      .should("be.visible")
      .click();
  }

  debatorAgentAccountTypeProprietary() {
    commonLocators.ByControlName("dbtrAgtAcctTpPrtry").clear().type("Savings");
  }

  debatorAgentAccountCurrency() {
    commonLocators.ByControlName("dbtrAgtAcctCcy").should("be.visible").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  debatorAgentAccountName() {
    commonLocators
      .ByControlName("dbtrAgtAcctNm")
      .clear()
      .type("Savings Account");
  }

  debatorAgentAccountProxyTypeOptional() {
    commonLocators
      .ByControlName("dbtrAgtAcctPrxyTpType")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " Proprietary ")
      .should("be.visible")
      .click({ force: true });
  }

  instrucedAgentCode() {
    commonLocators
      .ByControlName("instrForInstdAgtCd")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " REMD - Reminder ")
      .should("be.visible")
      .click();
  }

  instrucedInstructionInfo() {
    commonLocators.ByControlName("instrForInstdAgtInstrInf").clear().type("Ok");
  }

  // For multiple Record
  mulRecord1TotalChargesAmt() {
    commonLocators
      .ByControlName("record0TtlChrgsPerRcrdAmt")
      .clear()
      .type(1000);
  }

  mulRecord1TotalChargesAmtCurrency() {
    commonLocators
      .ByControlName("record0TtlChrgsPerRcrdAmtCcy")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  mulRecord1ChargeBrkdownCurrency() {
    commonLocators.ByControlName("amtCcy").should("be.visible").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  mulRecord1ChargeBrkdownAmt() {
    commonLocators.ByControlName("amt").clear().type(1000);
  }

  mulRecord1ChargeBrkdownTypeCode() {
    commonLocators.ByControlName("tpCd").should("be.visible").click();
    commonLocators
      .ByTextWithTag("div", " COMM - Commission ")
      .should("be.visible")
      .click();
  }

  mulRecord1UnderlyingMsgID() {
    commonLocators.ByControlName("record0UndrlygTxMsgId").clear().type(111);
  }

  mulRecord1UnderlyingMsgNameID() {
    commonLocators.ByControlName("record0UndrlygTxMsgNmId").clear().type(111);
  }

  mulRecord1UnderlyingAccServiceRef() {
    commonLocators
      .ByControlName("record0UndrlygTxAcctSvcrRef")
      .clear()
      .type("ok");
  }

  mulRecord1UnderlyingPaymentInfoID() {
    commonLocators
      .ByControlName("record0UndrlygTxPmtInfId")
      .clear()
      .type(12350);
  }

  mulRecord1UnderlyingInstructionID() {
    commonLocators.ByControlName("record0UndrlygTxInstrId").clear().type(1234);
  }

  mulRecord1UnderlyingEnd2EndID() {
    commonLocators
      .ByControlName("record0UndrlygTxEndToEndId")
      .clear()
      .type(12345);
  }

  mulRecord1UnderlyingTransUETR() {
    commonLocators
      .ByControlName("record0UndrlygTxUetr")
      .should("be.visible")
      .clear()
      .type("de2da6c9-18be-48d4-8053-867ed90a316a");
  }

  mulRecord1UnderlyingTransID() {
    commonLocators.ByControlName("record0UndrlygTxTxId").clear().type(121);
  }

  mulRecord1UnderlyingMandateID() {
    commonLocators.ByControlName("record0UndrlygTxMndtId").clear().type(122);
  }

  mulRecord1UnderlyingChequeNumber() {
    commonLocators
      .ByControlName("record0UndrlygTxChqNb")
      .clear()
      .type(123456789);
  }

  mulRecord1UnderlyingAccountOwnerTransID() {
    commonLocators
      .ByControlName("record0UndrlygTxAcctOwnrTxId")
      .clear()
      .type(121);
  }

  mulRecord1UnderlyingAccountServerTransID() {
    commonLocators
      .ByControlName("record0UndrlygTxAcctSvcrTxId")
      .clear()
      .type(121);
  }

  mulRecord1UnderlyingProcessingID() {
    commonLocators.ByControlName("record0UndrlygTxPrcgId").clear().type(12567);
  }

  mulRecordDebatorAgentBIC() {
    commonLocators
      .ByControlName("record0DbtrAgtBicfi")
      .clear()
      .type("SEBDBDDH{enter}");
  }

  mulRecord1DebatorAgentClearingSystemID() {
    commonLocators.ByControlName("record0DbtrAgtClrSysIdCd").click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  mulRecord1DebatorAgentMemberID() {
    commonLocators.ByControlName("record0DbtrAgtMmbId").clear().type(1);
  }

  mulRecordDebatorAgentLei() {
    commonLocators
      .ByControlName("record0DbtrAgtLei")
      .clear()
      .type(11111111111111111111);
  }

  mulRecord1DebatorAgentAccountIDType() {
    commonLocators
      .ByControlName("record0DbtrAgtAcctIdType")
      .should("be.visible")
      .click();
    commonLocators.ByTextWithTag("div", " IBAN ").should("be.visible").click();
  }

  mulRecord1DebatorAgentAccountIBAN() {
    commonLocators
      .ByControlName("record0DbtrAgtAcctIban")
      .clear()
      .type("GB00 XXXX 0000 0000 0000 00");
  }

  mulRecord1DebatorAgentAccountTypeOptional() {
    commonLocators
      .ByControlName("record0DbtrAgtAcctTpType")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " Proprietary ")
      .should("be.visible")
      .click();
  }

  mulRecord1DebatorAgentAccountTypeProprietary() {
    commonLocators
      .ByControlName("record0DbtrAgtAcctTpPrtry")
      .clear()
      .type("Savings");
  }

  mulRecord1DebatorAgentAccountCurrency() {
    commonLocators
      .ByControlName("record0DbtrAgtAcctCcy")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  mulRecord1DebatorAgentAccountName() {
    commonLocators
      .ByControlName("record0DbtrAgtAcctNm")
      .clear()
      .type("Savings Account");
  }

  mulRecord1DebatorAgentAccountProxyTypeOptional() {
    commonLocators
      .ByControlName("record0DbtrAgtAcctPrxyTpType")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " Proprietary ")
      .should("be.visible")
      .click({ force: true });
  }

  mulRecord1ChargesID() {
    commonLocators
      .ByControlName("record0ChrgsId")
      .clear()
      .type(1);
  }

  mulRecord1InstrucedAgentCode() {
    commonLocators
      .ByControlName("record0InstrForInstdAgtCd")
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " REMD - Reminder ")
      .should("be.visible")
      .click();
  }

  mulRecord1InstrucedInstructionInfo() {
    commonLocators
      .ByControlName("record0InstrForInstdAgtInstrInf")
      .clear()
      .type("Ok");
  }

  //////////////////////

  save() {
    commonLocators.ByTextWithTag("button", "Save").click({ force: true });
  }
}

export default new MX_Camt_106_Page();
