import { LoginPage } from "../../../support/pages/login_page.cy.js"
import { ProductPage } from "../../../support/pages/product_page.cy.js"

let loginPage = new LoginPage()
let productPage = new ProductPage()

beforeEach(() => {
    loginPage.navigateLoginPage()
    loginPage.fillUsername(Cypress.env('saucelab_username'))
    loginPage.fillPassword(Cypress.env('saucelab_password'))
    loginPage.clickLogin()
    cy.wait(3000)
    loginPage.validateLoginSuccess()
})

describe('Product Page', { testIsolation: true }, () => {
    it('Validate Product Description', () => {
        productPage.clickProduct()
        productPage.validateProductDescription()
    })
    it('User Can Sort Products by Name (A to Z)', () => {
        productPage.clickIconSort("Name (A to Z)")
    })
    it('User Can Sort Products by Name (Z to A)', () => {
        productPage.clickIconSort("Name (Z to A)")
    })
    it('User Can Sort Products by Price (Low to High)', () => {
        productPage.clickIconSort("Price (low to high)")
    })
    it('User Can Sort Products by Price (High to Low)', () => {
        productPage.clickIconSort("Price (high to low)")
    })
})