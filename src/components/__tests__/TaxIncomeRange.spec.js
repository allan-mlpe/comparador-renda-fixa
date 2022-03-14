import { describe, it, expect, beforeEach } from "vitest";

import { mount } from '@vue/test-utils'
import TaxIncomeRange from '../TaxIncomeRange.vue'

describe("TaxIncomeRange", () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(TaxIncomeRange)
    })

    it("renders properly", () => {
        const label = wrapper.find('label')
        const input = wrapper.find('input')


        expect(label.text()).toBe("Prazo para resgate:")
        expect(input.element.value).toBe('0')
    })

    it("emits the initial value when the component is created", () => {
        const inputEvent = wrapper.emitted('changeValue')

        expect(inputEvent).toHaveLength(1)
        expect(inputEvent[0]).toEqual([0.225])
    })

    it("emits the value on change event properly", () => {
        const input = wrapper.find('input')
        const newValue = 3

        input.setValue(newValue)

        const inputEvent = wrapper.emitted('changeValue')

        expect(input.element.value).toBe('3')
        expect(inputEvent).toHaveLength(2)
        expect(inputEvent[1]).toEqual([0.15])
    })
})