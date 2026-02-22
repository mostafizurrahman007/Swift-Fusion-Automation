/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../support/locators/commonLocators";

class OldSwiftHomePage{

    search(input){
        cy.get("input[placeholder='Fast Path...']").should('be.visible').clear().type(`${input}{enter}`);
    }

    menu(){

        cy.log("Clicking on Menu")
        cy.get("img[src='/asset/icons/menu.svg']").should('exist').and('be.visible').click({force:true});
        cy.get("img[src='/asset/icons/menu.svg']", {timeout:10000}).should('be.visible',{force:true});

    }

    search(input){
        cy.get("input[placeholder='Fast Path...']").should('be.visible').clear().type(`${input}{enter}`);
    }

    logout(){
        cy.get("div[routerlink='/login']").should('be.visible').and('exist').click({force:true});
    }

    search_MX_Message(){
        commonLocators.ByTextWithTag('p', 'MX Messages', {timeout:10000}).should('be.visible').click({force:true});
    }

    goToCamt_029(){
        commonLocators.ByTextWithTag('p', 
            'CAMT.029.001.09_Resolution Of Investigation', {timeout:10000})
            .scrollIntoView()
            .click({force:true});
    }

    goToCamt_109(){
        commonLocators.ByTextWithTag('p', 
            ' CAMT.109.001.01_Cheque CancellationOrStopReport ', {timeout:10000})
            .scrollIntoView()
            .click({force:true});
    }
}

export default new OldSwiftHomePage;