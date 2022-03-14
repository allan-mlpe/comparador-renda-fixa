import { describe, it, expect, beforeEach } from "vitest";

import { mount } from '@vue/test-utils'
import InvestmentInput from '../InvestmentInput.vue'

describe("InvestmentInput", () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(InvestmentInput, { props: { label: "input label", value: 10 } })
    })

    it("renders properly", () => {
      const label = wrapper.find('label')
      const input = wrapper.find('input')
      
      
      expect(label.text()).toContain("input label")
      expect(input.element.value).toBe('10')
    })

    it("emits the value on input event properly", () => {
        const input = wrapper.find('input')
        const newValue = 15

        input.setValue(newValue)

        const inputEvent = wrapper.emitted('changeValue')

        expect(input.element.value).toBe(newValue.toString())
        expect(inputEvent[0]).toEqual([newValue])
      })
  })
  