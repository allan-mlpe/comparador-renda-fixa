import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import PostFixedIpcaInvestment from "../PostFixedIpcaInvestment.vue";

describe("PrefixedIpcaInvestment", () => {
  let wrapper, feeInput, ipcaInput, taxIncomeInput;

  const setInputValues = (fee, ipcaValue, taxIncome) => {
    feeInput.setValue(fee);
    ipcaInput.setValue(ipcaValue);
    taxIncomeInput.setValue(taxIncome);
  };

  beforeEach(() => {
    wrapper = mount(PostFixedIpcaInvestment);
    feeInput = wrapper.find("[fee-input] input");
    ipcaInput = wrapper.find("[ipca-input] input");
    taxIncomeInput = wrapper.find("[tax-income-input] input");
  });

  it("renders properly", () => {
    expect(wrapper.find("div#postfixed-ipca-content").exists()).toBeTruthy();
  });

  it("updates the inflation rate to percentage properly", () => {
    const computedTrigger = { expectedInflation: 7.99 };

    expect(
      PostFixedIpcaInvestment.computed.percentageInflation.call(computedTrigger)
    ).toBe(0.0799);
  });

  it("updates the prefixed CBD when typing values", async () => {
    setInputValues("6.02", "6.667", "2");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("#cdb-card .card-text").text()).toBe("13.09%");
  });

  it("updates the prefixed LCI/LCA when typing values", async () => {
    setInputValues("4.31", "10.67", "0");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("#lci-card .card-text").text()).toBe("11.97%");
  });
});
