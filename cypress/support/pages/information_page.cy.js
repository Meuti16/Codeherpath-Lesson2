import information from "../selectors/information_element.js"
import overview from "../selectors/overview_element.js"

export class InformationPage {

    fillFirstName(dataFirstName) {
        const field_firstname = cy.get(information.field_firstname).as('field_firstname')
        field_firstname.type(dataFirstName)
    }

    fillLastName(dataLastName) {
        const field_lastname = cy.get(information.field_lastname).as('field_lastname')
        field_lastname.type(dataLastName)
    }

    fillPostalCode(dataPostalCode) {
        const field_postalcode = cy.get(information.field_postalcode).as('field_postalcode')
        field_postalcode.type(dataPostalCode)
    }

    clickContinue() {
        const buttonContinue = cy.get(information.button_continue).as('button_continue')
        buttonContinue.click()
    }

    validateSuccessfulRedirectToOverview(){
        cy.url().should('eq', `${Cypress.env('base_url')}checkout-step-two.html`);
        cy.get(overview.checkout_summary).should('be.visible')
    }

    validateErrorMessage(pesanError){
        cy.url().should('eq', `${Cypress.env('base_url')}checkout-step-one.html`);
        cy.get(information.alertError).should('be.visible').contains(pesanError)
    }
}    