describe("Prefixed investments Test", () => {
    beforeEach(() => {
        cy.visit("/");

        cy.get('#prefixed-tab').click()
    })

    it("opens Prefixed investments tab correctly", () => {
        cy.get('div#prefixed.active').should('exist')
    })


    it("calculates the CBD fee when typing a LCI fee", () => {
        cy.get('input').first().type('15.5')

        cy.get('input').eq(1).should('have.value', '20')
    });

    it("calculates the LCI fee when typing a CDB fee", () => {
        cy.get('input').eq(1).type('100')

        cy.get('input').first().should('have.value', '77.5')
    })

    it("recalculates CDB when the range is updated", () => {
        cy.get('input').first().type('10')

        const testValues = [
            { sliderValue: '0', expectedValue: '12.903225806451612' },
            { sliderValue: '1', expectedValue: '12.5' },
            { sliderValue: '2', expectedValue: '12.121212121212121' },
            { sliderValue: '3', expectedValue: '11.764705882352942' }
        ]

        testValues.forEach(d => {
            cy.get('input[type="range"]').setSliderValue(d.sliderValue)
            cy.get('input').eq(1).should('have.value', d.expectedValue)
        })
    })
})