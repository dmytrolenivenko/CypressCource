///<reference types="cypress" />

describe('Cypress Web Security', () => {
    it('Validate visiting 2 different domains', () => {
        cy.visit("https://www.webdriveruniversity.com");
        cy.visit("https://www.google.com");
    });
    it('Validate 2 different domains via user actions', () => {
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#automation-test-store").invoke("removeAttr", "target").click(); // Remove target attribute to open in the same tab
    });
    it.only('Origin command', () => {
        cy.origin("https://www.webdriveruniversity.com", () => {
            cy.visit("/");
        });
        cy.origin("https://www.automationteststore.com", () => {
            cy.visit("/");
        });
    })
});
