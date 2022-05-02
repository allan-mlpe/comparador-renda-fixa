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

  it("calculates the prefixed CBD fee correctly", () => {
    cy.get(prepareSelector(" input")).eq(0).clear().type("4.42");
    cy.get(prepareSelector(" input")).eq(1).clear().type("4.99");
    cy.get(prepareSelector(' input[type="range"]')).setSliderValue(2);

    cy.contains(prepareSelector(" div#cdb-card"), "9.63%");
  });

  it("calculates the prefixed LCI fee correctly", () => {
    cy.get(prepareSelector(" input")).eq(0).clear().type("6.2");
    cy.get(prepareSelector(" input")).eq(1).clear().type("11.69");
    cy.get(prepareSelector(' input[type="range"]')).setSliderValue(3);

    cy.contains(prepareSelector(" div#lci-card"), "15.82%");
  });

  it("calculates the equivalent LCI indexed to IPCA from a CDB correctly", () => {
    cy.get(prepareSelector(" input")).eq(0).clear().type("3.82");
    cy.get(prepareSelector(" input")).eq(1).clear().type("9.15");
    cy.get(prepareSelector(' input[type="range"]')).setSliderValue(0);

    cy.contains(prepareSelector(" div#lci-ipca-card"), "IPCA + 1.07%");
  });

  it("calculates the equivalent CDB indexed to IPCA from a LCI/LCA correctly", () => {
    cy.get(prepareSelector(" input")).eq(0).clear().type("5.45");
    cy.get(prepareSelector(" input")).eq(1).clear().type("3.5");
    cy.get(prepareSelector(' input[type="range"]')).setSliderValue(1);

    cy.contains(prepareSelector(" div#cdb-ipca-card"), "IPCA + 7.66%");
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
