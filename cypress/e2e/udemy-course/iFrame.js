///<reference types="cypress" />
describe('Handle iFrames and Modals', () => {
    it('Handling WebUni iFrame and Modal', () => {
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#iframe").invoke('removeAttr', 'target').click(); // Remove target attribute to open in the same tab

        cy.get('#frame').then(($frameBody) => {
            const body = $frameBody.contents().find('body');
            cy.wrap(body).as('frameBody'); // Wrap the body for further actions
        });
        cy.get('@frameBody').find('#button-find-out-more').click(); // Click the button inside the iFrame
        cy.get('@frameBody').find('#myModal .modal-body')
            .should('contain', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...'); // Verify modal content
    });
});
