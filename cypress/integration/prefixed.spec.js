describe("Prefixed investments Test", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get("#prefixed-tab").click();
  });

  it("opens Prefixed investments tab correctly", () => {
    cy.get("div#prefixed.active").should("exist");
  });

  it("calculates the CBD fee when typing a LCI fee", () => {
    cy.get("input").first().clear().type("15.5");

    cy.get("input").eq(1).should("have.value", "20.00");
  });

  it("calculates the LCI fee when typing a CDB fee", () => {
    cy.get("input").eq(1).clear().type("100");

    cy.get("input").first().should("have.value", "77.50");
  });

  it("recalculates CDB when the range is updated", () => {
    cy.get("input").first().clear().type("10");

    const testValues = [
      { sliderValue: "0", expectedValue: "12.90" },
      { sliderValue: "1", expectedValue: "12.50" },
      { sliderValue: "2", expectedValue: "12.12" },
      { sliderValue: "3", expectedValue: "11.76" },
    ];

    testValues.forEach((d) => {
      cy.get('input[type="range"]').setSliderValue(d.sliderValue);
      cy.get("input").eq(1).should("have.value", d.expectedValue);
    });
  });

  it("recalculates LCI/LCA when the range is updated", () => {
    cy.get("input").eq(1).clear().type("12");

    const testValues = [
      { sliderValue: "0", expectedValue: "9.30" },
      { sliderValue: "1", expectedValue: "9.60" },
      { sliderValue: "2", expectedValue: "9.90" },
      { sliderValue: "3", expectedValue: "10.20" },
    ];

    testValues.forEach((d) => {
      cy.get('input[type="range"]').setSliderValue(d.sliderValue);
      cy.get("input").first().should("have.value", d.expectedValue);
    });
  });
});
