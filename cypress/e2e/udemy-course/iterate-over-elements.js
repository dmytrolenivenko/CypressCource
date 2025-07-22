///<reference types="cypress" />

describe('Iterate over elements', () => {
    it('Log information all all the Titles of the Hair Products', () => {
        const desiredMenu = "Hair Care";
        const desiredProduct = "Eau Parfumee au The Vert Shampoo";
        var counter = 0;
        cy.visit("https://automationteststore.com/");
        cy.get(".subnav > ul > li > ").each(($el, index, $list) => {
            if ($el.text().trim() === desiredMenu) {
                cy.log("Found the desired menu: " + desiredMenu);
                cy.wrap($el).click();
            }
        });
        cy.get(" div.fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("#: " + index + " Product Title: " + $el.attr('title'));
            counter++;
            cy.log("Total number of products: " + counter);
            if($el.text().includes((desiredProduct.ignoreCase = true))) {
                cy.log("Found the desired product: " + desiredProduct);
                cy.wrap($el).click();
            } 
        })

    });
});
