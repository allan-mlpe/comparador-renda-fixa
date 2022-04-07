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
        const span = wrapper.find('span')
        const input = wrapper.find('input')

        expect(label.text()).toBe("Prazo para resgate:")
        expect(span.text()).toBe("Até 6 meses")
        expect(input.element.value).toBe('0')
    })

    it("updates the span when the value changes", async () => {
        const input = wrapper.find('input')
        const span = wrapper.find('span') 

        input.setValue(2)
        await wrapper.vm.$nextTick()

        expect(span.text()).toBe("Entre 1 e 2 anos")
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