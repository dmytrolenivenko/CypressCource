///<reference types="cypress" />

describe('Alias and Invoke', () => {
    it('Validate a specific hair care product', () => {
        cy.visit("https://automationteststore.com/");
        cy.get("#categorymenu").find("a").contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as("productName");
        cy.get("@productName").then((productName) => {
            cy.log("The first hair care product is: " + productName);
        })
    });
});