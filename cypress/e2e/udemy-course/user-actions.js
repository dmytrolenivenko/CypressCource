///<reference types="cypress" />

describe('Perform User actions', () => {
    it('Forward, Back and Reload', () => {
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#contact-us").invoke("removeAttr", "target").click(); // Remove target attribute to open in the same tab
        cy.url().should("include", "contactus");
        cy.go("back");
        cy.url().should("include", "webdriveruniversity");
        cy.go("forward");
        cy.reload(true); // true to force reload
        cy.url().should("include", "webdriveruniversity");
    });
});