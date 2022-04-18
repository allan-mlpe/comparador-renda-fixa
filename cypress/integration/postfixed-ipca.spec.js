describe("Postfixed IPCA investments Test", () => {
  const viewElementSelector = "div#postfixed-ipca";

  const prepareSelector = (element) => {
    return `${viewElementSelector}${element}`;
  };

  beforeEach(() => {
    cy.visit("/");

    cy.get("#postfixed-ipca-tab").click();
  });

  it("opens Postfixed IPCA investments tab correctly", () => {
    cy.get(prepareSelector(".active")).should("exist");
  });

  it("calculates the CBD and LCI postfixed indexed to IPCA fee correctly", () => {
    cy.get(prepareSelector(" input")).eq(0).clear().type("6.02");
    cy.get(prepareSelector(" input")).eq(1).clear().type("6.67");
    cy.get(prepareSelector(' input[type="range"]')).setSliderValue(2);

    cy.contains(prepareSelector(" div#cdb-card"), "13.09%");
    cy.contains(prepareSelector(" div#lci-card"), "10.80%");
  });

  it("recalculates LCI when the range is updated", () => {
    cy.get(prepareSelector(" input")).eq(0).clear().type("5.2");
    cy.get(prepareSelector(" input")).eq(1).clear().type("4.99");

    const testValues = [
      { sliderValue: "0", expectedValue: "8.10%" },
      { sliderValue: "1", expectedValue: "8.36%" },
      { sliderValue: "2", expectedValue: "8.62%" },
      { sliderValue: "3", expectedValue: "8.88%" },
    ];

    testValues.forEach((d) => {
      cy.get(prepareSelector(' input[type="range"]')).setSliderValue(
        d.sliderValue
      );

      cy.contains(prepareSelector(" div#lci-card"), d.expectedValue);
      cy.contains(prepareSelector(" div#cdb-card"), "10.45%");
    });
  });
});
