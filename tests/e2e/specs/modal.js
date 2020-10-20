describe("Open Modal", () => {
  it("Click on open modal button a check functionality", () => {
    cy.visit("/");
    cy.get('[data-cy="modalContainer"').should("not.be.visible");
    cy.get('[data-cy="openModal"]').click();
    cy.get('[data-cy="modalContainer"').should("be.visible");
  });
});

describe("Fill Form and Check", () => {
  it("Fill the form and check the ruslt", () => {
    cy.visit("/");
    cy.get('[data-cy="openModal"]').click();
    cy.get('[data-cy="modalContainer"').should("be.visible");
    cy.get('[data-cy="inputContent"]').type("Test");
    cy.get('[data-cy="selectColumn"]').select("Glad");
    cy.get('[data-cy="submitForm"]').click();
    cy.get("div.card__content").contains("Test");
    cy.get('[data-cy="modalContainer"').should("not.be.visible");
  });
});
