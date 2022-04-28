describe("Postfixed investments Test", () => {
  const viewElementSelector = "div#postfixed";

  const prepareSelector = (element) => {
    return `${viewElementSelector}${element}`;
  };

  beforeEach(() => {
    cy.visit("/");

    cy.get("#postfixed-tab").click();
  });

  it("opens Postfixed investments tab correctly", () => {
    cy.get(prepareSelector(".active")).should("exist");
  });

  it("calculates the CBD prefixed fee correctly", () => {
    cy.get(prepareSelector(" input")).eq(0).clear().type("120");
    cy.get(prepareSelector(" input")).eq(1).clear().type("10");

    cy.contains(prepareSelector(" div#cdb-card"), "12.00%");
  });

  it("calculates the CDB postfixed fee correctly", () => {
    cy.get(prepareSelector(" input")).eq(0).clear().type("91");
    cy.get(prepareSelector(" input")).eq(1).clear().type("11.75");

    cy.contains(prepareSelector(" div#postfixed-cdb-card"), "117.42% do CDI");
  });

  it("calculates the LCI prefixed fee correctly", () => {
    cy.get(prepareSelector(" input")).eq(0).clear().type("120");
    cy.get(prepareSelector(" input")).eq(1).clear().type("10");

    cy.contains(prepareSelector(" div#lci-card"), "9.30%");
  });

  it("calculates the LCI postfixed fee correctly", () => {
    cy.get(prepareSelector(" input")).eq(0).clear().type("114");
    cy.get(prepareSelector(" input")).eq(1).clear().type("12");

    cy.contains(prepareSelector(" div#postfixed-lci-card"), "88.35% do CDI");
  });

  it("recalculates LCI when the range is updated", () => {
    cy.get(prepareSelector(" input")).eq(0).clear().type("140");
    cy.get(prepareSelector(" input")).eq(1).clear().type("12");

    const testValues = [
      { sliderValue: "0", expectedValue: "13.02%" },
      { sliderValue: "1", expectedValue: "13.44%" },
      { sliderValue: "2", expectedValue: "13.86%" },
      { sliderValue: "3", expectedValue: "14.28%" },
    ];

    testValues.forEach((d) => {
      cy.get(prepareSelector(' input[type="range"]')).setSliderValue(
        d.sliderValue
      );

      cy.contains(prepareSelector(" div#lci-card"), d.expectedValue);
      cy.contains(prepareSelector(" div#cdb-card"), "16.80%");
    });
  });
});
