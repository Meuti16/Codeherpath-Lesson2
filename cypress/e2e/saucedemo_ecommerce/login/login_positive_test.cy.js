import { LoginPage } from "../../../support/pages/login_page.cy.js"

let loginPage = new LoginPage()

beforeEach(() => {
    loginPage.navigateLoginPage()
})

describe('Login Page', { testIsolation: true }, () => {
        it('Login with valid credentials', () => {
            loginPage.fillUsername(Cypress.env('saucelab_username'))
            loginPage.fillPassword(Cypress.env('saucelab_password'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateLoginSuccess()
        })
        it('Login with performance glitch user', () => {
            loginPage.fillUsername(Cypress.env('username_performance_glitch'))
            loginPage.fillPassword(Cypress.env('saucelab_password'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateLoginSuccess()
        })
        it('Login with error user', () => {
            loginPage.fillUsername(Cypress.env('username_error'))
            loginPage.fillPassword(Cypress.env('saucelab_password'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateLoginSuccess()
        })
        it('Login with problem user', () => {
            loginPage.fillUsername(Cypress.env('username_problem'))
            loginPage.fillPassword(Cypress.env('saucelab_password'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateLoginSuccess()
        })
        it('Login with visual user', () => {
            loginPage.fillUsername(Cypress.env('username_visual'))
            loginPage.fillPassword(Cypress.env('saucelab_password'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateLoginSuccess()
        })
})