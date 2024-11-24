import complete from "../selectors/complete_element.js"

export class CompletePage{
    
    clickButtonBackToHome() {
        const buttonBackToHome = cy.get(complete.button_back_to_home).as('buttonBackToHome')
        buttonBackToHome.click()
    }
}