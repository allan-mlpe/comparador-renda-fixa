import { describe, it, expect, beforeEach, each } from "vitest";

import { mount } from "@vue/test-utils";
import PrefixedInvestment from "../PrefixedInvestment.vue";

describe("PrefixedInvestment", () => {
  let wrapper, cdbInput, lciInput, taxIncomeInput;

  beforeEach(() => {
    wrapper = mount(PrefixedInvestment);
    cdbInput = wrapper.find("[cdb-input] input");
    lciInput = wrapper.find("[lci-input] input");
    taxIncomeInput = wrapper.find("[tax-income-input] input");
  });

  it("updates the CBD value when typing the LCI/LCA value", async () => {
    lciInput.setValue("10");
    await wrapper.vm.$nextTick();

    expect(lciInput.element.value).toBe("10");
    expect(cdbInput.element.value).toBe("12.90");
  });

  it("updates the LCI/LCA value when typing the CDB value", async () => {
    cdbInput.setValue("10");
    await wrapper.vm.$nextTick();

    expect(cdbInput.element.value).toBe("10");
    expect(lciInput.element.value).toBe("7.75");
  });

  it.each([
    { sliderValue: "0", expectedValue: "11.24" },
    { sliderValue: "1", expectedValue: "11.60" },
    { sliderValue: "2", expectedValue: "11.96" },
    { sliderValue: "3", expectedValue: "12.32" },
  ])(
    "updates the LCI value when updating the tax income value, after setting a new CDB value",
    async ({ sliderValue, expectedValue }) => {
      taxIncomeInput.setValue(sliderValue);
      cdbInput.setValue("14.5");
      await wrapper.vm.$nextTick();

      expect(lciInput.element.value).toEqual(expectedValue);
    }
  );

  it.each([
    { sliderValue: "0", expectedValue: "15.42" },
    { sliderValue: "1", expectedValue: "14.94" },
    { sliderValue: "2", expectedValue: "14.48" },
    { sliderValue: "3", expectedValue: "14.06" },
  ])(
    "updates the CDB value when updating the tax income value, after setting a new LCI value",
    async ({ sliderValue, expectedValue }) => {
      lciInput.setValue("11.95");

      taxIncomeInput.setValue(sliderValue);
      await wrapper.vm.$nextTick();

      expect(cdbInput.element.value).toEqual(expectedValue);
    }
  );
});
