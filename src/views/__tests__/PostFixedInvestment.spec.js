import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import PostFixedInvestment from "../PostFixedInvestment.vue";

describe("PrefixedInvestment", () => {
  let wrapper, feeInput, interestRateInput, taxIncomeInput;

  const setInputValues = (fee, interestRate, taxIncome) => {
    feeInput.setValue(fee);
    interestRateInput.setValue(interestRate);
    taxIncomeInput.setValue(taxIncome);
  };

  beforeEach(() => {
    wrapper = mount(PostFixedInvestment);
    feeInput = wrapper.find("[fee-input] input");
    interestRateInput = wrapper.find("[interest-rate-input] input");
    taxIncomeInput = wrapper.find("[tax-income-input] input");
  });

  it("renders properly", () => {
    expect(wrapper.find("div#postfixed-content").exists()).toBeTruthy();
  });

  it("updates the inflation rate to percentage properly", () => {
    const computedTrigger = { expectedCdi: 12.6 };

    expect(
      PostFixedInvestment.computed.percentageCdi.call(computedTrigger)
    ).toBe(0.126);
  });

  it("updates the prefixed CBD when typing values", async () => {
    setInputValues("115", "10", "1");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("#cdb-card .card-text").text()).toBe("11.50%");
  });

  it("updates the prefixed LCI/LCA when typing values", async () => {
    setInputValues("150", "6", "3");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("#lci-card .card-text").text()).toBe("7.65%");
  });

  it("updates the equivalent postfixed LCI/LCA when typing values", async () => {
    setInputValues("100", "11", "1");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("#postfixed-lci-card .card-text").text()).toBe(
      "80.00%"
    );
  });

  it("updates the equivalent postfixed CDB when typing values", async () => {
    setInputValues("90.06", "12", "2");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("#postfixed-cdb-card .card-text").text()).toBe(
      "109.16%"
    );
  });
});
