import { describe, it, expect } from "vitest";
import {
  lciToCdb,
  cdbToLci,
  postFixedCdbToPrefixed,
  postFixedLciToPrefixed,
  ipcaCdbToPrefixed,
  ipcaLciToPrefixed,
  prefixedToIpca,
} from "../converters";

describe("Converters", () => {
  it.each([
    { input: { cdbFee: 110, incomeTax: 0.175 }, result: 90.75 },
    { input: { cdbFee: 0, incomeTax: 0.175 }, result: 0 },
    { input: { cdbFee: 100, incomeTax: 0.225 }, result: 77.5 },
    { input: { cdbFee: 108, incomeTax: 0.2 }, result: 86.4 },
    { input: { cdbFee: 140, incomeTax: 0 }, result: 140 },
  ])("Converts a CDB to LCI/LCA properly", ({ input, result }) => {
    const lci = cdbToLci(input.cdbFee, input.incomeTax);

    expect(lci).toBe(result);
  });

  it.each([
    { input: { lciFee: 90.75, incomeTax: 0.175 }, result: 110 },
    { input: { lciFee: 0, incomeTax: 0.175 }, result: 0 },
    { input: { lciFee: 86.4, incomeTax: 0.2 }, result: 108 },
    { input: { lciFee: 108, incomeTax: 0.5 }, result: 216 },
    { input: { lciFee: 140, incomeTax: 1 }, result: 0 },
  ])("Converts a LCI/LCA to CDB properly", ({ input, result }) => {
    const cdb = lciToCdb(input.lciFee, input.incomeTax);

    expect(cdb).toBe(result);
  });

  it.each([
    { input: { postFixedCdbFee: 100, interestRate: 0.12 }, result: 12 },
    { input: { postFixedCdbFee: 0, interestRate: 0.12 }, result: 0 },
    { input: { postFixedCdbFee: 119, interestRate: 0.11 }, result: 13.09 },
    { input: { postFixedCdbFee: 300, interestRate: 0 }, result: 0 },
  ])(
    "Converts a CDB post fixed to a CDB prefixed properly",
    ({ input, result }) => {
      const prefixedCdb = postFixedCdbToPrefixed(
        input.postFixedCdbFee,
        input.interestRate
      );

      expect(prefixedCdb).toBe(result);
    }
  );

  it.each([
    {
      input: { postFixedLciFee: 109, incomeTax: 0.175, interestRate: 0.12 },
      result: 10.79,
    },
    {
      input: { postFixedLciFee: 0, incomeTax: 0.175, interestRate: 0.08 },
      result: 0,
    },
    {
      input: { postFixedLciFee: 115, incomeTax: 0.225, interestRate: 0.11 },
      result: 9.8,
    },
    {
      input: { postFixedLciFee: 100, incomeTax: 0.15, interestRate: 0.14 },
      result: 11.9,
    },
    {
      input: { postFixedLciFee: 122, incomeTax: 0, interestRate: 0.04 },
      result: 4.88,
    },
  ])(
    "Converts a LCI post fixed to a LCI prefixed properly",
    ({ input, result }) => {
      const prefixedLci = postFixedLciToPrefixed(
        input.postFixedLciFee,
        input.incomeTax,
        input.interestRate
      );

      expect(prefixedLci).toBeCloseTo(result, 2);
    }
  );

  it.each([
    { input: { cdbFee: 6.02, inflationRate: 0.0667 }, result: 13.09 },
    { input: { cdbFee: 3.87, inflationRate: 0.0667 }, result: 10.8 },
    { input: { cdbFee: 4, inflationRate: 0.11 }, result: 15.44 },
    { input: { cdbFee: 6.02, inflationRate: 0 }, result: 6.02 },
    { input: { cdbFee: 0, inflationRate: 0.0667 }, result: 6.67 },
  ])(
    "Converts a CDB indexed to IPCA to a prefixed one properly",
    ({ input, result }) => {
      const cdb = ipcaCdbToPrefixed(input.cdbFee, input.inflationRate);

      expect(cdb).toBeCloseTo(result, 2);
    }
  );

  it.each([
    {
      input: { lciFee: 6.02, incomeTax: 0.175, inflationRate: 0.0667 },
      result: 10.8,
    },
    {
      input: { lciFee: 3.89, incomeTax: 0.225, inflationRate: 0.11 },
      result: 11.87,
    },
    {
      input: { lciFee: 4.31, incomeTax: 0.2, inflationRate: 0.0889 },
      result: 10.87,
    },
    {
      input: { lciFee: 2.3, incomeTax: 0.15, inflationRate: 0.1 },
      result: 10.65,
    },
  ])(
    "Converts a LCI indexed to IPCA to a prefixed one properly",
    ({ input, result }) => {
      const prefixedLci = ipcaLciToPrefixed(
        input.lciFee,
        input.incomeTax,
        input.inflationRate
      );

      expect(prefixedLci).toBeCloseTo(result, 2);
    }
  );

  it.each([
    { input: { prefixedFee: 13.09, inflationRate: 0.0667 }, result: 6.02 },
    { input: { prefixedFee: 10.8, inflationRate: 0.0667 }, result: 3.87 },
    { input: { prefixedFee: 0, inflationRate: 0.085 }, result: 7.83 },
    { input: { prefixedFee: 12, inflationRate: 0 }, result: 12.0 },
  ])(
    "Converts a prefixed investment to an indexed to IPCA one properly",
    ({ input, result }) => {
      const ipcaIndexedInvestment = prefixedToIpca(
        input.prefixedFee,
        input.inflationRate
      );

      expect(ipcaIndexedInvestment).toBeCloseTo(result, 2);
    }
  );
});
