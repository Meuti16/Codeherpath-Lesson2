import overview from "../selectors/overview_element.js"
import complete from "../selectors/complete_element.js"

export class OverviewPage{

    clickButonFinish() {
        const buttonFinish = cy.get(overview.button_finish).as('buttonFinish')
        buttonFinish.click()
    }

    clickButtonCancel() {
        const buttonCancel = cy.get(overview.button_cancel).as('buttonCancel')
        buttonCancel.click()
    }

    validateSuccessfulRedirectToCompletePage(orderMessageSuccesfully){
        cy.url().should('eq', `${Cypress.env('base_url')}checkout-complete.html`);
        cy.get(complete.order_message_succesfully).should('be.visible').contains(orderMessageSuccesfully)
    }

    validateSuccessfulPurchaseCancellation(){
        cy.url().should('eq', `${Cypress.env('base_url')}inventory.html`);
    }
}