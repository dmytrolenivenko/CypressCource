/// <reference types="cypress" />

describe('Test Contact US from via WebdriverUni', () => {


    const testPack = "https://automationteststore.com/";
    //const testPack = "https://www.webdriveruniversity.com/Contact-Us/contactus.html";

    beforeEach(() => {


    });
    it('Should be able to submit a successgul submission via contact us form', () => {
        //cypress code here
        if (testPack === "https://automationteststore.com/") {
            cy.visit("https://automationteststore.com/");
            cy.get("[href$='contact']").click().then(function(element) {
                console.log("This is the text in the returned ITEM - " + element.text());
            })
            cy.get('#ContactUsFrm_first_name').type("Dmytro Lenivenko");
            cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
            cy.get('#ContactUsFrm_email').type("email@gmail.com");
            cy.get('#ContactUsFrm_enquiry').type("Some randome comment");
            cy.get('.col-md-6 > .btn').click();
        } else if (testPack === "https://www.webdriveruniversity.com/Contact-Us/contactus.html") {
            cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

            cy.url().should("contain", "contactus.html");  // URL check -contian or include
            cy.document().should('have.property', 'charset').and('equal', 'UTF-8');  // Document check
            cy.title().should("include", "WebDriver | Contact Us");  // Page title check
            cy.get('[name="first_name"]').type("Dmytro");
            cy.get('[name="last_name"]').type("Lenivenko");
            cy.get('[name="email"]').type("email@gmail.com");
            cy.get('textarea.feedback-input').type("Some randome comment");
            cy.get('[type="submit"]').click({ multiple: true });
            cy.get('h1').should('have.text', 'Thank You for your Message!');
        }
    });

    it('Should NOT be able to submit a sucessfull submission via contact us as all the fields are required', () => {
        //cypress code here
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Dmytro");
        cy.get('[name="last_name"]').type("Lenivenko");
        //cy.get('[name="email"]').type("email@gmail.com");
        cy.get('textarea.feedback-input').type("Some random comment");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required').should('be.visible');
    });
});
