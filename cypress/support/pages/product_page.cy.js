import product from "../selectors/product_element.js"

export class ProductPage {

    clickProduct() {
        const firstProduct = cy.get(product.first_product).as('firstProduct')
        firstProduct.click()
    }

    validateProductDescription(){
        cy.get(product.product_description).should('be.visible')
    }

    clickIconSort(sortOptions) {
        const iconSort = cy.get(product.sort_icon).as('iconSort')
        iconSort.select(sortOptions)
    }

    clickButtonAddToCart() {
        const buttonAdd = cy.get(product.add_to_cart_button).as('buttonAdd')
        buttonAdd.click()
    }
}
