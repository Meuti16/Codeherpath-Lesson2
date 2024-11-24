import { LoginPage } from "../../../support/pages/login_page.cy.js"

let loginPage = new LoginPage()

beforeEach(() => {
    loginPage.navigateLoginPage()
})

describe('Login Page', { testIsolation: true }, () => {
        it('Login with username locked out', () => {
            loginPage.fillUsername(Cypress.env('username_lockedout'))
            loginPage.fillPassword(Cypress.env('saucelab_password'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateInvalidCredentialsError("Epic sadface: Sorry, this user has been locked out.")
        })
        it('Login with invalid username', () => {
            loginPage.fillUsername(Cypress.env('invalid_username'))
            loginPage.fillPassword(Cypress.env('saucelab_password'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateInvalidCredentialsError("Epic sadface: Username and password do not match any user in this service")
        })
        it('Login with invalid password', () => {
            loginPage.fillUsername(Cypress.env('saucelab_username'))
            loginPage.fillPassword(Cypress.env('invalid_password'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateInvalidCredentialsError("Epic sadface: Username and password do not match any user in this service")
        })
        it('Login with invalid username and password', () => {
            loginPage.fillUsername(Cypress.env('invalid_username'))
            loginPage.fillPassword(Cypress.env('invalid_password'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateInvalidCredentialsError("Epic sadface: Username and password do not match any user in this service")
        })
})