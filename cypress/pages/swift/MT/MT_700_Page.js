/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { randomNumber } from "../../../utils/commonUtils";
import { commonLocators } from "../../../support/locators/commonLocators";
import {
  getCurrentDateDDMMYYYY,
  randomString,
} from "../../../utils/commonUtils";

class MT_700_Page {
  documentCreditNumber_20 = randomNumber();

  formOfDocumentCredit40A() {
    commonLocators
      .ByControlName("docCrForm40A")
      .first()
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " REVOCABLE ")
      .should("be.visible")
      .click();
  }

  documentCreditNumber20() {
    commonLocators
      .ByControlName("docCrNum20")
      .first()
      .should("be.visible")
      .clear()
      .type(this.documentCreditNumber_20);
  }

  dateOfIssue31C() {
    commonLocators
      .ByControlName("issueDt31C")
      .first()
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  applicableRules40E() {
    commonLocators
      .ByControlName("appRules40E")
      .first()
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " UCP LATEST VERSION ")
      .should("be.visible")
      .click();
  }

  dateOfExpiry31D() {
    commonLocators
      .ByControlName("expiryDt31D")
      .first()
      .clear()
      .type(getCurrentDateDDMMYYYY() + "{enter}");
  }

  placeOfExpiry31D() {
    commonLocators
      .ByControlName("expiryPlace31D")
      .first()
      .should("be.visible")
      .clear()
      .type("Dhaka");
  }

  applicantNameAndAddress50() {
    commonLocators
      .ByID("applicant50_line_0")
      .should("be.visible")
      .clear()
      .type("Anik, Dhaka");
  }

  beneficiaryNameAndAddress59() {
    commonLocators
      .ByID("benf59_line_0")
      .should("be.visible")
      .clear()
      .type("Anik, Dhaka");
  }

  currencyField() {
    commonLocators.ByControlName("curCode32B").should("be.visible").click();
    commonLocators
      .ByTextWithTag("div", " USD - US Dollar ")
      .should("be.visible")
      .click();
  }

  currencyAndAmount32B() {
    commonLocators
      .ByControlName("amount32B")
      .should("be.visible")
      .clear()
      .type(5000);
  }

  availableWithOption41A() {
    commonLocators
      .ByControlName("availWithOption41")
      .first()
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " Option A - Identifier Code (BIC) ")
      .should("be.visible")
      .click();
  }

  availableWithBIC41A() {
    commonLocators
      .ByControlName("availWithBic41A")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type("SEBDBDDH{enter}");
  }

  availableBy41A() {
    commonLocators
      .ByControlName("availBy41D")
      .first()
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " BY PAYMENT ")
      .should("be.visible")
      .click();
  }

  confirmInstructions49() {
    commonLocators
      .ByControlName("confirmation49")
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click();
    commonLocators
      .ByTextWithTag("div", " CONFIRM - Receiver requested to confirm credit ")
      .should("be.visible")
      .click();
  }

  senderBIC() {
    commonLocators
      .ByControlName("senderBic")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type("SEBDBDDH{enter}");
  }

  receiverBIC() {
    commonLocators
      .ByControlName("receiverBic")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type("BKBABDDH{enter}");
  }

  save() {
    commonLocators.ByTextWithTag("button", "Save").click({ force: true });
  }
}

export default new MT_700_Page();
