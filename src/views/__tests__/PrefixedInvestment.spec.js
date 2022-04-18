import { describe, it, expect, beforeEach } from "vitest";

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

  it("doesn't update the LCI value when updating the tax income value", async () => {
    const lciInitialValue = lciInput.element.value;

    taxIncomeInput.setValue("3");
    await wrapper.vm.$nextTick();

    expect(lciInput.element.value).toEqual(lciInitialValue);
  });

  it("updates the CDB value when updating the tax income value", async () => {
    const cdbInitialValue = cdbInput.element.value;

    taxIncomeInput.setValue("2");
    await wrapper.vm.$nextTick();

    expect(lciInput.element.value).not.toEqual(cdbInitialValue);
  });
});
