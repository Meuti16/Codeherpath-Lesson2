import { LoginPage } from "../../../support/pages/login_page.cy.js"
import { ProductPage } from "../../../support/pages/product_page.cy.js"
import { CartPage } from "../../../support/pages/cart_page.cy.js"
import { InformationPage } from "../../../support/pages/information_page.cy.js"

let loginPage = new LoginPage()
let productPage = new ProductPage()
let cartPage = new CartPage()
let informationPage = new InformationPage()

beforeEach(() => {
    loginPage.navigateLoginPage()
    loginPage.fillUsername(Cypress.env('saucelab_username'))
    loginPage.fillPassword(Cypress.env('saucelab_password'))
    loginPage.clickLogin()
    cy.wait(3000)
    loginPage.validateLoginSuccess()
    productPage.clickButtonAddToCart()
    cartPage.clickIconCart()
    cartPage.clickButtonCheckout()
    cartPage.validateRedirectedToInformationPage()
})

describe('Information Page', { testIsolation: true }, () => {
    it('User fills in all fields on the information page with valid data', () => {
        informationPage.fillFirstName(Cypress.env('firstname'))
        informationPage.fillLastName(Cypress.env('lastname'))
        informationPage.fillPostalCode(Cypress.env('postalcode'))
        informationPage.clickContinue()
        cy.wait(3000)
        informationPage.validateSuccessfulRedirectToOverview()
    })
})