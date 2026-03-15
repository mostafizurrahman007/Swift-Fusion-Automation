/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY } from "../utils/dateUtils";

class MX_Pacs_009_Page {
  charSetField() {
    commonLocators.ByControlName("charSet").clear().type("A");
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
      .dblclick();
    commonLocators.inputByPlaceholder("SWIFT code search...").clear().type("M");
    commonLocators.ByAria_Label_Btn("Find").should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  relatedToBIC() {
    // commonLocators.ByTextWithTag('span', 'To').should('be.visible').click();
    commonLocators.ByControlName("rltdToBic").dblclick();
    commonLocators.inputByPlaceholder("SWIFT code search...").clear().type("K");
    commonLocators.ByAria_Label_Btn("Find").click().should("be.visible");
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
    commonLocators.ByControlName("bizMsgIdr").clear().type("A");
  }

  msgID() {
    commonLocators.ByControlName("rltdMsgDefIdr").clear().type("1");
  }

  businessServiceField() {
    commonLocators.ByControlName("rltdBizSvc").clear().type("A");
  }

  groupHeaderMsgID() {
    commonLocators.ByControlName("msgId").clear().type("A");
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
    commonLocators.ByControlName("TxInfInstgAgtFinInstnIdBICFI").dblclick();
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
    commonLocators
      .inputByPlaceholder("Enter SWIFT code prefix to search...")
      .clear()
      .type("K");
    commonLocators
      .ByAria_Label_Btn("Find SWIFT Code")
      .click()
      .should("be.visible");
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
    commonLocators.ByControlName("Bicfi").eq(0).dblclick();
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

  creditorBic() {
    commonLocators.ByControlName("Bicfi").eq(1).dblclick();
    commonLocators.inputByPlaceholder("SWIFT code search...").clear().type("K");
    commonLocators.ByAria_Label_Btn("Find").click().should("be.visible");
    commonLocators.ByTextWithTag("td", "BANGLADESH KRISHI BANK").dblclick();
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

        cy.get('div[role="alert"]', { timeout: 4000 })
          .first()
          .should("be.visible")
          .click();
      });

    cy.get('div[role="alert"]', { timeout: 4000 })
      .first()
      .should("be.visible")
      .click();
  }
}

export default new MX_Pacs_009_Page();
