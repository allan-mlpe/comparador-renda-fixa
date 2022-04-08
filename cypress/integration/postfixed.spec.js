describe("Postfixed investments Test", () => {
    const viewElementSelector = "div#postfixed"

    const prepareSelector = (element) => {
        return `${viewElementSelector}${element}`
    }
    
    beforeEach(() => {
        cy.visit("/");

        cy.get('#postfixed-tab').click()
    })

    it("opens Postfixed investments tab correctly", () => {
        cy.get(prepareSelector('.active')).should('exist')
    })

    it("calculates the CBD and LCI predixed fee correctly", () => {
        cy.get(prepareSelector(' input')).eq(0).clear().type('120')
        cy.get(prepareSelector(' input')).eq(1).clear().type('10')

        cy.contains(prepareSelector(' div#cdb-card'), '12.00%')
        cy.contains(prepareSelector(' div#lci-card'), '93.00%')
    });

    it("recalculates LCI when the range is updated", () => {
        cy.get(prepareSelector(' input')).eq(0).clear().type('140')
        cy.get(prepareSelector(' input')).eq(1).clear().type('12')

        const testValues = [
            { sliderValue: '0', expectedValue: '108.50%' },
            { sliderValue: '1', expectedValue: '112.00%' },
            { sliderValue: '2', expectedValue: '115.50%' },
            { sliderValue: '3', expectedValue: '119.00%' }
        ]

        testValues.forEach(d => {
            cy.get(prepareSelector(' input[type="range"]')).setSliderValue(d.sliderValue)
            
            cy.contains(prepareSelector(' div#lci-card'), d.expectedValue)
            cy.contains(prepareSelector(' div#cdb-card'), '16.80%')
        })
    })
})