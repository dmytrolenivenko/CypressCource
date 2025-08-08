///<reference types="cypress" />
describe('Working with Radio Buttons', () => {

    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true }); // Remove target attribute to open in the same tab
        cy.url().should('include', 'Checkboxes'); // Assert that the URL includes 'Checkboxes'
    });

    it('lets click on first radio button', () => {
        cy.get("#radio-buttons").find("[type='radio']").as("radioButtonsSection"); // Alias the radio buttons section

        cy.get("@radioButtonsSection").first().click(); // Click on the first radio button
        cy.get("@radioButtonsSection").eq(1).click(); // Click on the first radio button again
    });

    it('Lets check in ALL Radios', () => {
        cy.get("#radio-buttons").find("[type='radio']").as("radioButtonsSection"); // Alias the radio buttons section

        cy.get("@radioButtonsSection").then(($buttons) => {
            const totalOfRadioButtons = $buttons.length; // Get the total number of radio buttons
            cy.log("Total Radio Buttons: " + totalOfRadioButtons); // Log the total number of radio buttons
            expect(totalOfRadioButtons).to.be.equal(5); // Assert that there is at least one radio button
        });
        cy.get("@radioButtonsSection").each(($el) => {
                cy.wrap($el).click().should("be.checked") // Check the radio button if it is not checked and assert it is checked
                .invoke("val")
                .then((val) => { cy.log("Radio Button Clicked: " + val); // Log the value of the radio button
                })
        });
    });

    it.only('Check whether the Radio is disabled', () => {
        cy.get("#radio-buttons-selected-disabled").find("[type='radio']").as("radioButtonsSection"); // Alias the radio buttons section

        cy.get("@radioButtonsSection").last().should("be.checked")
            .invoke("val")
            .then((val) => { cy.log("Last Radio Button Value: " + val); }); // Log the value of the last radio button
        cy.get("@radioButtonsSection").first().should("not.be.checked"); // assert that the first radio button is not checked
        cy.get("@radioButtonsSection").first().click().should("be.checked"); // Click the first radio button and assert it is checked
        cy.get("@radioButtonsSection").last().should("not.be.checked"); // Assert that the last radio button is not checked
        cy.get("@radioButtonsSection").last().click().should("be.checked"); // Assert that the last radio button is checked

        cy.get("@radioButtonsSection").filter("[value='cabbage']").should("be.disabled"); // Assert that the radio button with value 'cabbage' is disabled
    });
});