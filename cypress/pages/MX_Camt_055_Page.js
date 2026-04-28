/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../support/locators/commonLocators";
import { getCurrentDateDDMMYYYY } from "../utils/commonUtils";

class MX_Camt_055_Page {
  charSetField() {
    commonLocators.ByControlName("charSet").clear().type("A");
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
    commonLocators.ByControlName("psblDplct").click();
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
    commonLocators.ByID("bicSearchInput").clear().type("M");
    commonLocators.ByID("id_btn2").should("be.visible").click();
    commonLocators.ByTextWithTag("td", " MUTUAL TRUST BANK LTD.").dblclick();
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

  businessMsg() {
    commonLocators.ByControlName("rltdBizMsgIdr").clear().type("A");
  }

  msgID() {
    commonLocators.ByControlName("rltdMsgDefIdr").clear().type("1");
  }

  businessServiceField() {
    commonLocators.ByControlName("rltdBizSvc").clear().type("A");
  }

  dateCreationField() {
    commonLocators
      .ByControlName("rltdCreDt")
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
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

  originalEndToEndID() {
    commonLocators.ByControlName("orgnlEndToEndId").clear().type(1);
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
    commonLocators.ByControlName("rsnCd").click();
    commonLocators
      .ByTextWithTag(" AM11 - InvalidTransactionCurrency ")
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
    commonLocators.ByID("id_btn2").should("be.visible").click();
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

export default new MX_Camt_055_Page();
