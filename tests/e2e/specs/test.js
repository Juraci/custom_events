// https://docs.cypress.io/api/introduction/api.html

describe("Note taking app", () => {
  it("Can add a note", () => {
    cy.visit("/");
    cy.get("input").type("Sample Note");
    cy.get("input").type("{enter}");

    cy.get(".notes").should("have.length", 1);
    cy.get(".timestamps").should("have.length", 1);
  });
});
