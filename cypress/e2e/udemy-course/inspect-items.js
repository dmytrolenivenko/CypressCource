describe('Inspect Automation Test Store items using chain of commands', () => {
    it('Click on the item with specific Index', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').eq(3).click(); // Click on the 4th item of the List
    });
    it('Click on the item with specific Text', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click(); // Click on the item with specific text
    });
    it('Click on the first item using FIND', () => {
        cy.visit('https://automationteststore.com/');
        cy.get(".fixed_wrapper").find('.prdocutname').eq(0).click(); // Click on the first item using FIND
    });
    it.only('Click on the item with specific Text and then THEN function', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function (returnedElement) {
            console.log("This is the text in the returned ITEM - " + returnedElement.text());
        });
    });
});
