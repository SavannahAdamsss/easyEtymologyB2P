describe("Easy Etymology", () => {
	it("Should display and function correctly", () => {
        cy.visit("/index.html");
        cy.title().should("contain", "EasyEtymology");
        cy.get(".splash-container");

        cy.get(".splash");
        cy.url().should("contain", "http://easyetymology.surge.sh/");
        cy.get("#input");
        cy.get(".pure-button").click();
        
	});
});