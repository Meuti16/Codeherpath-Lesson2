import product from "../selectors/product_element.js"
import cart from "../selectors/cart_element.js"
import information from "../selectors/information_element.js"

export class CartPage{
    clickIconCart() {
        const iconCart = cy.get(product.icon_cart).as('iconCart')
        iconCart.click()
    }

    clickButtonRemove() {
        const buttonRemove = cy.get(cart.remove_button).as('buttonRemove')
        buttonRemove.click()
    }

    clickButtonCheckout() {
        const buttonCheckout = cy.get(cart.checkout_button).as('buttonRemove')
        buttonCheckout.click()
    }

    validateItemAddedToCart(){
        cy.url().should('eq', `${Cypress.env('base_url')}cart.html`);
        cy.get(product.product_name).should('be.visible')
    }

    validateItemRemovedFromCart(){
        cy.url().should('eq', `${Cypress.env('base_url')}cart.html`);
        cy.get(product.product_name).should('not.exist')
    }

    validateRedirectedToInformationPage(){
        cy.url().should('eq', `${Cypress.env('base_url')}checkout-step-one.html`);
        cy.get(information.form_input).should('be.visible')
    }
}