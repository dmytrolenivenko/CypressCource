///<reference types="cypress" />
describe('This will be the Drop Down challenge', () => {

    function testDropDown(dropdownSelector) {
        cy.get(dropdownSelector + " option").each(($option) => {
            const value = $option.attr('value'); // Get the value of the option
            const text = $option.text().trim(); // Get the text of the option

            cy.get(dropdownSelector).select(value).should('have.value', value); // Select the option and assert the value
            cy.get(`${dropdownSelector} option:selected`).should("have.text", text); // Select the option and assert the value
        });
    }
    it('Lets interact with drop downs and choose required line', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true }); // Remove target attribute to open in the same tab

        
        testDropDown("#dropdowm-menu-1");
        testDropDown("#dropdowm-menu-2");
        testDropDown("#dropdowm-menu-3");

        //Select by Value
        //     cy.get("#dropdowm-menu-1 option").each(($option) => {
        //         const value = $option.attr('value'); // Get the value of the option 
        //         const text = $option.text().trim(); // Get the text of the option
        //         cy.get("#dropdowm-menu-1").select(value).should('have.value', value)
        //         cy.get("#dropdowm-menu-1 option:selected").should("have.text", text); // Select the option and assert the value
        //     });

        //     //Select by Text
        //     cy.get("#dropdowm-menu-1 option").each(($option) => {
        //         const text = $option.text().trim(); // Get the text of the option
        //         cy.log("Option Text: " + text); // Log the text of the option
        //         cy.get("#dropdowm-menu-1").select(text)
        //         cy.get("#dropdowm-menu-1 option:selected").should('have.text', text); // Select the option and assert the text

        //     });
        //     //By Text and Value
        //     cy.get("#dropdowm-menu-2 option").each(($option) => {
        //         const value = $option.attr('value'); // Get the value of the option
        //         const text = $option.text().trim(); // Get the text of the option

        //         cy.get("#dropdowm-menu-2").select(value).should('have.value', value); // Select the option and assert the value
        //         cy.get("#dropdowm-menu-2 option:selected").should("have.text", text); // Select the option and assert the value


        //     });
        //     //By Value and Text
        //     cy.get("#dropdowm-menu-3 option").each(($option) => {
        //         const value = $option.attr('value'); // Get the value of the option
        //         const text = $option.text().trim(); // Get the text of the option

        //         cy.get("#dropdowm-menu-3").select(value).should('have.value', value); // Select the option and assert the value
        //         cy.get("#dropdowm-menu-3 option:selected").should("have.text", text); // Select the option and assert the value
        //     });
        // });

    });



});