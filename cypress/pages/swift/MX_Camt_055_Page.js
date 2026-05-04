/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY, randomString } from "../../utils/commonUtils";

class MX_Camt_055_Page {
  businessMsgText = randomString();

  charSetField() {
    commonLocators.ByControlName("charSet").clear().type("A");
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

  businessMsg() {
    commonLocators
      .ByControlName("bizMsgIdr")
      .clear()
      .type(this.businessMsgText);
  }

  copyDuplicateField() {
    commonLocators.ByControlName("cpyDplct").click();
    commonLocators.ByTextWithTag("div", " Copy ").should("be.visible").click();
  }

  possibleDuplicateField() {
    commonLocators.ByControlName("psblDplct").click();
    commonLocators.ByTextWithTag("div", " Yes ").should("be.visible").click();
  }

  relatedCharSetField() {
    commonLocators.ByControlName("rltdCharSet").clear().type("A");
  }

  assignerBIC() {
    // commonLocators.ByTextWithTag('span', 'From').eq(5).should('be.visible').click();
    commonLocators
      .ByControlName("assgnrBicfi")
      .scrollIntoView({ force: true })
      .dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn").eq(1).should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
  }

  assigneeBIC() {
    // commonLocators.ByTextWithTag('span', 'To').should('be.visible').click();
    commonLocators.ByControlName("assgneBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("K");
    commonLocators.ByID("id_btn").eq(1).click().should("be.visible");
    commonLocators.ByTextWithTag("td", "BANGLADESH KRISHI BANK").dblclick();
  }

  assignerClearingSystemID() {
    commonLocators.ByControlName("assgnrClrSysIdCd").click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  assigneeClearingSystemID() {
    commonLocators.ByControlName("assgneClrSysIdCd").click();
    commonLocators
      .ByTextWithTag("div", " VA - VaticanCityClearingSystemID ")
      .should("be.visible")
      .click();
  }

  assignerMemberID() {
    commonLocators.ByControlName("assgnrMmbId").clear().type(1);
  }

  assigneeMemberID() {
    commonLocators.ByControlName("assgneMmbId").clear().type(1);
  }

  assignerLei() {
    commonLocators
      .ByControlName("assgnrLei")
      .clear()
      .type("11111111111111111111");
  }

  assigneeLei() {
    commonLocators
      .ByControlName("assgneLei")
      .clear()
      .type("11111111111111111111");
  }

  originalPaymentID() {
    commonLocators.ByControlName("orgnlPmtInfId").clear().type("123");
  }

  businessServiceField() {
    commonLocators.ByControlName("orgnlMsgId").clear().type("An");
  }

  priorityField() {
    commonLocators.ByControlName("rltdPrty").click();
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

  originalMsgNameIdentification() {
    commonLocators.ByControlName("orgnlMsgNmId").clear().type(1);
  }

  originalDateCreationField() {
    commonLocators
      .ByControlName("orgnlCreDtTm")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  transCancellationID() {
    commonLocators.ByControlName("cxlId").clear().type(123);
  }

  caseID() {
    commonLocators.ByControlName("caseId").clear().type(111);
  }

  creatorType() {
    commonLocators.ByControlName("cretrType").click();
    commonLocators
      .ByTextWithTag("div", " Party (Person/Organization) ")
      .should("be.visible")
      .click();
  }

  partyNameField() {
    commonLocators.ByControlName("cretrNm").clear().type("A");
  }

  partyCountryField() {
    commonLocators.ByControlName("cretrCtryOfRes").click();
    commonLocators
      .ByTextWithTag("div", " BD - Bangladesh ")
      .should("be.visible")
      .click();
  }

  partyPostalAddressPanelClick() {
    commonLocators
      .ByPanelID("expansion-header-15")
      .should("be.visible")
      .click();
  }

  partyPostalDepartmentField() {
    commonLocators.ByControlName("cretrDept").clear().type("A");
  }

  partyPostalStreetNameField() {
    commonLocators.ByControlName("cretrStrtNm").clear().type("abc");
  }

  partyPostalPostCodeField() {
    commonLocators.ByControlName("cretrPstCd").clear().type(1);
  }

  partyPostalTownNameField() {
    commonLocators.ByControlName("cretrTwnNm").clear().type("Mirpur");
  }

  partyPostalDistrictNameField() {
    commonLocators.ByControlName("cretrDstrctNm").clear().type("Dhaka");
  }

  partyPostalCountryNameField() {
    commonLocators.ByControlName("cretrCtry").click();
    commonLocators
      .ByTextWithTag("div", " 001 - Bangladesh ")
      .should("be.visible")
      .click();
  }

  originalInstructionID() {
    commonLocators
      .ByControlName("orgnlInstrId")
      .should("be.visible")
      .clear()
      .type(123);
  }

  originalInstructionID() {
    commonLocators
      .ByControlName("orgnlInstrId")
      .should("be.visible")
      .clear()
      .type(123);
  }

  originalEndToEndID() {
    commonLocators
      .ByControlName("orgnlEndToEndId")
      .should("be.visible")
      .clear()
      .type(12345);
  }

  originalUETR() {
    commonLocators
      .ByControlName("orgnlUetr")
      .should("be.visible")
      .clear()
      .type("de2da6c9-18be-48d4-8053-867ed90a316a");
  }

  originalCurrencyField() {
    commonLocators.ByControlName("orgnlInstdAmtCcy").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  originalInstructedAmt() {
    commonLocators
      .ByControlName("orgnlInstdAmt")
      .should("be.visible")
      .clear()
      .type(2000);
  }

  originalExecutionDate() {
    commonLocators
      .ByControlName("orgnlReqdExctnDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  originalCollectionDate() {
    commonLocators
      .ByControlName("orgnlReqdColltnDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  cancellationReasonCodeField() {
    commonLocators.ByControlName("cxlRsnCd").click();
    commonLocators
      .ByTextWithTag(" AGNT - Incorrect Agent ")
      .should("be.visible")
      .click();
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
    commonLocators.ByControlName("instgAgtBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn").eq(1).should("be.visible").click();
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
    commonLocators.ByControlName("instdAgtBicfi").dblclick();
    commonLocators.ByID("bicSearchInput").clear().type("K");
    commonLocators.ByID("id_btn").eq(1).click().should("be.visible");
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

  save() {
    commonLocators.ByTextWithTag("button", "Save").click({ force: true });
  }
}

export default new MX_Camt_055_Page();
