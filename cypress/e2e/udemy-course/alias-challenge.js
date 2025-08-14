///<reference types="cypress" />

describe('Invoke alias of Thhumbnail and perform some actions', () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
    });

    it('Create an alias of thumbnails and assert alias quantity', () => {
        cy.get(".thumbnail").as("thumbnails"); // Create an alias for thumbnails 
        cy.get("@thumbnails").then(function ($thumbnails) {
            cy.log("Total number of products: " + $thumbnails.length);
        });
        cy.get("@thumbnails").should('have.length', 16); // Assert the number of thumbnails
    });
    it('Check if all the Thumbs have "Add to Cart" button', () => {
        let hasAddtoCartCount = 0;
        let outOfStockCount = 0;
        cy.get(".thumbnail").as("thumbnails"); // Create an alias for thumbnails

        cy.get("@thumbnails").each(($thumb) => {
            const hasButton = $thumb.find('.productcart[title="Add to Cart"]').length > 0; // Check if the thumbnail has "Add to Cart" button
            const isOutOfStock = $thumb.text().includes("Out of Stock"); // Check if the thumbnail is out of stock

            expect(hasButton || isOutOfStock).to.be.true; // Assert that either the button exists or the product is out of stock

            // Lets count the thumbnails with "Add to Cart" button and those that are out of stock
            if (hasButton) {
                hasAddtoCartCount++;
            } else if (isOutOfStock) {
                outOfStockCount++;
            }
        }).then(() => {
            cy.log("Total thumbnails with 'Add to Cart' button: " + hasAddtoCartCount); // Log the count of thumbnails with "Add to Cart" button
            cy.log("Total thumbnails that are out of stock: " + outOfStockCount); // Log the count of thumbnails that are out of stock
            expect(hasAddtoCartCount + outOfStockCount).to.equal(16); // Assert total count matches the number of thumbnails
        })
    });
    it('Lets Log the prices', () => {
        cy.get(".col-xs-12").as("allProducts");
        cy.get("@allProducts").each(($el) => {
            const isOnSale = $el.find(".oneprice").length === 0; // Check if the product has a sale price
            if (!isOnSale) {
                cy.log("Product: '" + $el.find(".prdocutname").text() + " has non-sale price: " + $el.find(".oneprice").text()); // Log products with non-sale price
            } else {
                cy.log("Product: '" + $el.find(".prdocutname").text() + " has old price: " + $el.find(".priceold").text() + " has sale price: " + $el.find(".pricenew").text()); // Log products with old and sale prices
            }
        });
        cy.get("@allProducts").eq(0).find(".prdocutname").should('contain', 'Skinsheen Bronzer Stick'); // Assert the first product name
    });
    it("Let's see how much total price of discount and Non discount items and now many of each", () => {
        let normalPrice = 0;
        let salePrice = 0;
        let normalPriceCount = 0;
        let salePriceCount = 0;
        cy.get(".col-xs-12").as("allProducts");
        cy.get("@allProducts").each(($el) => {

            const isOnSale = $el.find(".oneprice").length === 0; // Check if the product has a sale price
            if (!isOnSale) {
                const priceText = $el.find(".oneprice").text().replace("$", "").trim();
                const price = parseFloat(priceText); // Convert the price to a number
                normalPrice += price;
                normalPriceCount++;

            } else {
                let priceText = $el.find(".pricenew").text().replace("$", "").trim();
                const price = parseFloat(priceText); // Convert the sale price to a number
                salePrice += price;
                salePriceCount++;
            }

        }).then(() => {
            cy.log("Total Normal Price: " + normalPrice + " for " + normalPriceCount + " products");
            cy.log("Total Sale Price: " + salePrice + " for " + salePriceCount + " products");
        });
    });
    it('', () => {
        
    });
});