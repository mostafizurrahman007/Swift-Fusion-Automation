/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY, randomString } from "../../utils/commonUtils";

class MX_Pacs_009_Page {
  groupHeaderMsgIDText = randomString();

  charSetField() {
    commonLocators.ByControlName("charSet").clear().type("Auth1");
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
    commonLocators.ByControlName("fromMmbId").clear().type(1);
  }

  toMemberID() {
    commonLocators.ByControlName("toMmbId").clear().type(1);
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

  copyDuplicateField() {
    commonLocators.ByControlName("cpyDplct").click();
    commonLocators.ByTextWithTag("div", " COPY ").should("be.visible").click();
  }

  possibleDuplicateField() {
    commonLocators.ByControlName("pssblDplct").click();
    commonLocators.ByTextWithTag("div", " Yes ").should("be.visible").click();
  }

  relatedCharSetField() {
    commonLocators.ByControlName("rltdCharSet").clear().type("A");
  }

  relatedFromBIC() {
    // commonLocators.ByTextWithTag('span', 'From').eq(5).should('be.visible').click();
    commonLocators
      .ByControlName("rltdFromBicfi")
      .scrollIntoView({ force: true })
      .clear()
      .type("SEBDBDDH{enter}");
  }

  relatedToBIC() {
    // commonLocators.ByTextWithTag('span', 'To').should('be.visible').click();
    commonLocators.ByControlName("rltdToBic").dblclick();
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
    commonLocators.ByControlName("rltdFrmMembId").clear().type(1);
  }

  relatedToMemberID() {
    commonLocators.ByControlName("rltdToMembId").clear().type(1);
  }

  relatedFromLei() {
    commonLocators
      .ByControlName("rltdFrmLei")
      .clear()
      .type("11111111111111111111");
  }

  relatedToLei() {
    commonLocators
      .ByControlName("rltdToLei")
      .clear()
      .type("11111111111111111111");
  }

  businessMsgID() {
    commonLocators.ByControlName("bizMsgIdr").clear().type("Ank");
  }

  msgID() {
    commonLocators.ByControlName("rltdMsgDefIdr").clear().type("1");
  }

  businessServiceField() {
    commonLocators.ByControlName("rltdBizSvc").clear().type("A");
  }

  groupHeaderMsgID() {
    commonLocators
      .ByControlName("msgId")
      .clear()
      .type(this.groupHeaderMsgIDText);
  }

  groupHeaderDateCreationField() {
    commonLocators
      .ByControlName("GrpHdrcreDtTm")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  priorityField() {
    commonLocators.ByControlName("priority").click();
    commonLocators
      .ByTextWithTag("div", " Normal ")
      .should("be.visible")
      .click();
  }

  registryField() {
    commonLocators.ByControlName("mktPrctcRegy").clear().type("1");
  }

  marketIdentificationField() {
    commonLocators
      .ByControlName("mktPrctcId")
      .should("be.visible")
      .clear()
      .type("A");
  }

  originalMsgIdentification() {
    commonLocators.ByControlName("orgnlMsgId").clear().type(1);
  }

  originalInstructionIdentification() {
    commonLocators.ByControlName("TxInfOrgnlInstrId").clear().type(1);
  }

  paymentEndToEndID() {
    commonLocators.ByControlName("endToEndId").clear().type(1);
  }

  paymentTransactionID() {
    commonLocators.ByControlName("txId").clear().type(1);
  }

  paymentClearingSystemRef() {
    commonLocators.ByControlName("clrSysRef").clear().type("A");
  }

  internetBankingSettlementDate() {
    commonLocators
      .ByControlName("TxInfIntrBkSttlmDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  internetBankingSettlementPriorityField() {
    commonLocators.ByControlName("sttlmPrty").click();
    commonLocators
      .ByTextWithTag("div", " Normal ")
      .should("be.visible")
      .click();
  }

  internetBankingAMountField() {
    commonLocators.ByControlName("intrBkSttlmAmt").clear().type(5000);
  }

  transactionStatus() {
    commonLocators.ByControlName("txSts").click();
    commonLocators
      .ByTextWithTag("div", " CINC - CertificateOfIncorporationNumber ")
      .should("be.visible")
      .click();
  }

  originatorNameField() {
    commonLocators.ByControlName("orgtrNm").clear().type("A");
  }

  originatorCountryField() {
    commonLocators.ByControlName("orgtrCtryOfRes").click();
    commonLocators
      .ByTextWithTag("div", " 001 - Bangladesh ")
      .should("be.visible")
      .click();
  }

  returnedInstrucedCurrencyField() {
    commonLocators.ByControlName("TxInfRtrdInstdAmtCcy").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  returnedInstrucedAmountField() {
    commonLocators.ByControlName("TxInfRtrdInstdAmt").clear().type(5000);
  }

  interBankCurrencyField() {
    commonLocators.ByControlName("intrBkSttlmAmtCcy").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  originatorPostalDepartmentField() {
    commonLocators.ByControlName("orgtrDept").clear().type("A");
  }

  originatorPostalStreetField() {
    commonLocators.ByControlName("orgtrStrtNm").clear().type(1);
  }

  originatorPostalPostCodeField() {
    commonLocators.ByControlName("orgtrPstCd").clear().type(1);
  }

  originatorPostalTownNameField() {
    commonLocators.ByControlName("orgtrTwnNm").clear().type("Mirpur");
  }

  originatorPostalDistrictNameField() {
    commonLocators.ByControlName("orgtrDstrctNm").clear().type("Dhaka");
  }

  originatorPostalCountryNameField() {
    commonLocators.ByControlName("orgtrCtry").click();
    commonLocators
      .ByTextWithTag("div", " 001 - Bangladesh ")
      .should("be.visible")
      .click();
  }

  reasonCodeField() {
    commonLocators.ByControlName("TxInfRtrRsnInfRsnCd").clear().type(101);
  }

  reasonPropietaryField() {
    commonLocators.ByControlName("rsnCd").clear().type("A");
  }

  clearingSystemRef() {
    commonLocators.ByControlName("clrSysRef").click();
    commonLocators
      .ByTextWithTag(" VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  instrucingAgentBicfi() {
    commonLocators
      .ByControlName("TxInfInstgAgtFinInstnIdBICFI")
      .clear()
      .type("SEBDBDDH{enter}");
  }

  instrucingClearingMemberID() {
    commonLocators.ByControlName("instgAgtClrMmbId").clear().type(1);
  }

  instrucingClearingID() {
    commonLocators.ByControlName("instgAgtClrClrSysId").click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  instrucedAgentBicfi() {
    commonLocators.ByControlName("TxInfInstdAgtFinInstnIdBICFI").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("K");
    commonLocators.ByID("id_btn2").click().should("be.visible");
    commonLocators.ByTextWithTag("td", "BANGLADESH KRISHI BANK").dblclick();
  }

  instrucedClearingMemberID() {
    commonLocators.ByControlName("instdAgtClrMmbId").clear().type(1);
  }

  instrucedClearingID() {
    commonLocators.ByControlName("instdAgtClrClrSysId").click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  debtorBic() {
    commonLocators.ByControlName("Bicfi").eq(0).clear().type("SEBDBDDH{enter}");
  }

  creditorBic() {
    commonLocators.ByControlName("Bicfi").eq(1).dblclick();
    commonLocators.inputByPlaceholder("SWIFT code search...").clear().type("K");
    commonLocators.ByAria_Label_Btn("Find").click().should("be.visible");
    commonLocators.ByTextWithTag("td", "BANGLADESH KRISHI BANK").dblclick();
  }

  save() {
    commonLocators.ByTextWithTag("button", "Save").click({ force: true });
  }
}

export default new MX_Pacs_009_Page();
