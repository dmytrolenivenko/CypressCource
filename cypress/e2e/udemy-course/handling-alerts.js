///<reference types="cypress" />

describe('Handling Alerts and Popups', () => {
    it('Confirm thar Alert contains correct text', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({ force: true }); // Remove target attribute to open Alerts in the same tab

        cy.get("#button1").click();

        cy.on("window:alert", (str) => {
            expect(str).to.equal("I am an alert box!");
        });
    });

    it('Handle the Alertbox and choose where to click', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({ force: true }); // Remove target attribute to open Alerts in the same tab

        cy.get("#button4").click();
        cy.on("window:confirm", (str) => {
            //return false; // This will cancel the confirm dialog
            return true; // This will accept the confirm dialog
        });
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });
    it('Hande the Confirm box and assert the Cancel text', () => {
        const cancelText = "You pressed Cancel!";
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({ force: true }); // Remove target attribute to open Alerts in the same tab
        cy.get("#button4").click();
        cy.on("window:confirm", (str) => {
            return false; // This will cancel the confirm dialog
        });
        cy.get('#confirm-alert-text').should('have.text', cancelText);
    });
    it.only('Lets try to play with STUBS', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({ force: true });

        const stub = cy.stub();
        cy.on("window:alert", stub);

        cy.get("#button1").click().then(() => {
            expect(stub.getCall(0).args[0]).to.equal("I am an alert box!");
        }).then(() => {
            cy.get("#button4").click();
            cy.on("window:confirm", (str) => {
                return true; // Accept the confirm dialog
            });
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        }).then(() => {
            cy.get("#button4").click();
            cy.on("window:confirm", (str) => {
                return false; // Cancel the confirm dialog
            });
            cy.get('#confirm-alert-text').contains('You pressed Cancel!');
        });

    });
});