/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../support/locators/commonLocators";

class MessagePage {
    inputFromBIC(){
        commonLocators.inputByPlaceholder("e.g., DEUTDEFFXXX").first().dblclick();
        commonLocators.inputByPlaceholder("SWIFT code search...").clear().type("M");
        commonLocators.ByAria_Label_Btn("Find").click().should('be.visible');
        commonLocators.ByTextWithTag('td', ' MUTUAL TRUST BANK LTD.').dblclick();
    }

    inputToBIC(){
        commonLocators.inputByPlaceholder("e.g., DEUTDEFFXXX").eq(1).dblclick();
        commonLocators.inputByPlaceholder("SWIFT code search...").clear().type("K");
        commonLocators.ByAria_Label_Btn("Find").click().should('be.visible');
        commonLocators.ByTextWithTag('td', 'BANGLADESH KRISHI BANK').dblclick();
    }

    businessMsg(){
        commonLocators.inputByPlaceholder("Enter Business Message Identifier").clear().type("A");
    }

    firstIdentificationField(){
        commonLocators.inputByPlaceholder("Enter Identification").eq(0).should('be.visible').clear().type("1");
    }

    assignerBIC(){
        commonLocators.inputByPlaceholder("e.g., DEUTDEFFXXX").eq(2).dblclick();
        commonLocators.inputByPlaceholder("SWIFT code search...").clear().type("M");
        commonLocators.ByAria_Label_Btn("Find").click().should('be.visible');
        commonLocators.ByTextWithTag('td', ' MUTUAL TRUST BANK LTD.').dblclick();
    }

    // confirmationDialog(){
    //     commonLocators.inputByPlaceholder("Search confirmation").click().select('CNCL - Cancellation Confirmed')
    // }

    confirmationDialog(){
        commonLocators.inputByPlaceholder("Search confirmation").should('be.visible').click();
        commonLocators.ByTextWithTag('div', 'CNCL - Cancellation Confirmed').click();
    }

    cancellationStatusID(){
        commonLocators.inputByPlaceholder("Enter Cancellation Status ID").should('be.visible').clear().type("1");
    }

    secondIdentificationField(){
        commonLocators.inputByPlaceholder("Enter Identification").eq(1).should('be.visible').clear().type("1");
    }

}

export default new MessagePage;