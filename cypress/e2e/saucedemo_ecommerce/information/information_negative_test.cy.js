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
    it('User fills in the firstname and lastname fields with valid data but leaves the postal code field empty', () => {
        informationPage.fillFirstName(Cypress.env('firstname'))
        informationPage.fillLastName(Cypress.env('lastname'))
        informationPage.clickContinue()
        cy.wait(3000)
        informationPage.validateErrorMessage("Error: Postal Code is required")
    })
    it('User fills in the firstname and zipcode fields with valid data but leaves the lastname field empty', () => {
        informationPage.fillFirstName(Cypress.env('firstname'))
        informationPage.fillPostalCode(Cypress.env('postalcode'))
        informationPage.clickContinue()
        cy.wait(3000)
        informationPage.validateErrorMessage("Error: Last Name is required")
    })
    it('User fills in the zipcode and lastname fields with valid data but leaves the firstname field empty', () => {
        informationPage.fillLastName(Cypress.env('lastname'))
        informationPage.fillPostalCode(Cypress.env('postalcode'))
        informationPage.clickContinue()
        cy.wait(3000)
        informationPage.validateErrorMessage("Error: First Name is required")
    })
    it('User leaves all fields empty', () => {
        informationPage.clickContinue()
        cy.wait(3000)
        informationPage.validateErrorMessage("Error: First Name is required")
    }) 
})