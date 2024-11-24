import { LoginPage } from "../../../support/pages/login_page.cy.js"
import { ProductPage } from "../../../support/pages/product_page.cy.js"
import { CartPage } from "../../../support/pages/cart_page.cy.js"
import { InformationPage } from "../../../support/pages/information_page.cy.js"
import { OverviewPage } from "../../../support/pages/overview_page.cy.js"


let loginPage = new LoginPage()
let productPage = new ProductPage()
let cartPage = new CartPage()
let informationPage = new InformationPage()
let overviewPage = new OverviewPage()

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
    informationPage.fillFirstName(Cypress.env('firstname'))
    informationPage.fillLastName(Cypress.env('lastname'))
    informationPage.fillPostalCode(Cypress.env('postalcode'))
    informationPage.clickContinue()
    cy.wait(3000)
    informationPage.validateSuccessfulRedirectToOverview()
})

describe('Overview Page', { testIsolation: true }, () => {
    it('User can review purchased items and confirm purchases', () => {
        overviewPage.clickButonFinish()
        overviewPage.validateSuccessfulRedirectToCompletePage("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    })
    it('User can review purchased items and cancel the purchases', () => {
        overviewPage.clickButtonCancel()
        overviewPage.validateSuccessfulPurchaseCancellation()
    })
})