import login from "../selectors/login_element.js"
import product from "../selectors/product_element.js"

export class LoginPage {
    navigateLoginPage() {
        cy.visit('https://www.saucedemo.com/');
    }

    fillUsername(dataEmail) {
        const validateEmail = cy.get(login.fieldUsername).as('fieldEmail');  // Menggunakan ID untuk memilih elemen
        validateEmail.type(dataEmail);
    }    

    fillPassword(dataPassword) {
        const validatePassword = cy.get(login.fieldPassword).as('fieldPassword')
        validatePassword.type(dataPassword)
    }

    clickLogin() {
        const buttonLogin = cy.get(login.btnLogin).as('buttonLogin')
        buttonLogin.click()
    }

    // validateLoginSuccess() {
    validateLoginSuccess() {
        cy.url().should('eq', `${Cypress.env('base_url')}inventory.html`);
        cy.get(product.product_list).should('be.visible')
    }   

    validateInvalidCredentialsError(pesanError){
        cy.url().should('eq', Cypress.env('base_url'))
        cy.get(login.alertError).should('be.visible').contains(pesanError)
    }
}