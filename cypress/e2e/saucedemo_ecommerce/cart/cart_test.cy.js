import { LoginPage } from "../../../support/pages/login_page.cy.js"
import { ProductPage } from "../../../support/pages/product_page.cy.js"
import { CartPage } from "../../../support/pages/cart_page.cy.js"

let loginPage = new LoginPage()
let productPage = new ProductPage()
let cartPage = new CartPage()

beforeEach(() => {
    loginPage.navigateLoginPage()
    loginPage.fillUsername(Cypress.env('saucelab_username'))
    loginPage.fillPassword(Cypress.env('saucelab_password'))
    loginPage.clickLogin()
    cy.wait(3000)
    loginPage.validateLoginSuccess()
})

describe('Cart Page', { testIsolation: true }, () => {
    it('User can add items to cart', () => {
        productPage.clickButtonAddToCart()
        cartPage.clickIconCart()
        cartPage.validateItemAddedToCart()
    })
    it('User can remove items from the cart', () => {
        productPage.clickButtonAddToCart()
        cartPage.clickIconCart()
        cartPage.clickButtonRemove()
        cartPage.validateItemRemovedFromCart()
    })
    it('User can continue their purchase to the checkout page', () => {
        productPage.clickButtonAddToCart()
        cartPage.clickIconCart()
        cartPage.clickButtonCheckout()
        cartPage.validateRedirectedToInformationPage()
    })
})
