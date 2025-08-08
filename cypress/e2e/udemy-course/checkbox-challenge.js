///<reference types="cypress" />

describe('Perfome a validation of the check boxes', () => {
    it('Lets check if all the checkboxes are UNchecked', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true }); // Remove target attribute to open in the same tab
        cy.url().should('include', 'Checkboxes'); // Assert that the URL includes 'Checkboxes'

        cy.get("#checkboxes [value*='option']").each(($el) => {
            const isChecked = $el.prop('checked'); // Check if the checkbox is checked

            if (isChecked) {
                cy.wrap($el).uncheck().should("not.be.checked"); // Uncheck the checkbox if it is checked and assert it is not checked
            } else {
                cy.wrap($el).should("not.be.checked"); // Assert that the checkbox is not checked
            }
        });

    });
    it('Lets check if all the checkboxes are checked and Check All', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true }); // Remove target attribute to open in the same tab
        cy.url().should('include', 'Checkboxes'); // Assert that the URL includes 'Checkboxes'
        cy.get("#checkboxes [value*='option']").each(($el) => {
            const isChecked = $el.prop('checked'); // Check if the checkbox is checked~

            if (!isChecked) {
                cy.wrap($el).check().should("be.checked"); // Check the checkbox if it is not checked and assert it is checked  
            }
        });
        cy.get("#checkboxes [value*='option']").each(($el) => {
            cy.wrap($el).should("be.checked") // Assert that all checkboxes are checked
        });
    });
});