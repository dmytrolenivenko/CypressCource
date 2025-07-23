/// <reference types="cypress" />

describe('Force to open New Tab in the SAME Browser', () => {

    it('Should be able to submit a successgul submission via contact us form', () => {
        //cypress code here
        cy.visit("https://www.webdriveruniversity.com")

        cy.get("#contact-us").invoke("removeAttr", "target").click(); // Remove target attribute to open in the same tab

        cy.url().should("contain", "contactus.html");  // URL check -contian or include
        cy.document().should('have.property', 'charset').and('equal', 'UTF-8');  // Document check
        cy.title().should("include", "WebDriver | Contact Us");  // Page title check
        cy.get('[name="first_name"]').type("Dmytro");
        cy.get('[name="last_name"]').type("Lenivenko");
        cy.get('[name="email"]').type("email@gmail.com");
        cy.get('textarea.feedback-input').type("Some randome comment");
        cy.get('[type="submit"]').click({ multiple: true });
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });
    it('Should NOT be able to submit a sucessfull submission via contact us as all the fields are required', () => {
        //cypress code here
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#contact-us").invoke("removeAttr", "target").click(); // Remove target attribute to open in the same tab

        cy.get('[name="first_name"]').type("Dmytro");
        cy.get('[name="last_name"]').type("Lenivenko");
        //cy.get('[name="email"]').type("email@gmail.com");
        cy.get('textarea.feedback-input').type("Some random comment");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required').should('be.visible');
    });
});
