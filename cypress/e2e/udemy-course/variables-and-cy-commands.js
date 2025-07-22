/// <reference types="cypress" />~

describe('Verifying variables, cypresss commands and jQuery commands', () => {
    it('Navigating to specific product pages', () => {
        cy.visit("https://automationteststore.com/");

        // THIS IS A WRONG APPROACH, SINCE JA AND CYPRESS COMMANDS ARE NOT CHAINED
        //     const makupLink = cy.get("a[href*='path=36']").contains('Makeup');
        //     makupLink.click();
        //     const skinCareLink = cy.get("a[href*='path=43']").and('contain', 'Skincare');
        //     skinCareLink.click();

        cy.get("a[href*='path=36']").contains('Makeup').click(); // Correct approach using Cypress commands
        cy.get("a[href*='path=43']").contains('Skincare').click(); // Correct approach using Cypress commands
        cy.get("a[href*='path=43']").and('contain', 'Skincare'); // Assertion using Cypress commands
    });
    it('Saving the Variable with then', () => {
        cy.visit("https://automationteststore.com/");

        // THIS IS A WRONG APPROACH, SINCE JA AND CYPRESS COMMANDS ARE NOT CHAINED
        //     const makupLink = cy.get("a[href*='path=36']").contains('Makeup');
        //     makupLink.click();
        //     const skinCareLink = cy.get("a[href*='path=43']").and('contain', 'Skincare');
        //     skinCareLink.click();

        cy.get("a[href*='path=36']").contains('Makeup').click().then($returnedElement => {
            const makeupLinkText = $returnedElement.text();
            console.log("Makeup Link Text: " + makeupLinkText);
        })
        cy.get("h1 .maintext").then($returnedElement => { // Corerct way of using Promices! Everithyng is chained in one function
            const makeupTitle = $returnedElement.text();
            console.log("Makeup Title: " + makeupTitle);
            expect(makeupTitle).to.be.equal("Makeup");
        })
    });
    it.only("Lets find the specific arrtibute and compare it ", () => {
        //Lets get the element
        // USING CYRESS COMMANDS
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.get("#ContactUsFrm").find("#field_12").then($element => {
            const filedText = $element.text();
            console.log("Field Text: " + filedText);
        })
        cy.get("#ContactUsFrm").find("#field_12").should('contain', 'Email');
        cy.contains("#ContactUsFrm", "Email").find("#field_12").should('contain', 'Email'); // Using contains to find the element with specific text
    
        // USING JQUERY COMMANDS
        cy.get("#ContactUsFrm").then($returnedElement => {
            const fieldText = $returnedElement.find("#field_12").text();
            expect(fieldText).to.contain('Email');

        })

    })
});
