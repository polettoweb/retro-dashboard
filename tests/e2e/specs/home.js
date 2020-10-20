// https://docs.cypress.io/api/introduction/api.html

describe("Visiting Root", () => {
  it("Visits the app root url and check for content", () => {
    cy.visit("/");
    cy.contains("h1", "Retrospective Dashboard");
    cy.get("h2").each(($el, $index, $list) => {
      expect($list).to.have.length(3);
    });
  });
});
