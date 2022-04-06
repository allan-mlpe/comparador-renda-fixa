import { describe, it, expect } from "vitest";
import { lciToCdb, cdbToLci, postFixedCdbToPrefixed } from "../converters";

const cdbToLciData = [
    { input: { cdbFee: 110, incomeTax: 0.175 }, result: 90.75 },
    { input: { cdbFee: 0,   incomeTax: 0.175 }, result: 0 },
    { input: { cdbFee: 100, incomeTax: 0.225 }, result: 77.5 },
    { input: { cdbFee: 108, incomeTax: 0.20 },  result: 86.4 },
    { input: { cdbFee: 140, incomeTax: 0 },     result: 140 }
]

const lciToCdbData = [
    { input: { lciFee: 90.75, incomeTax: 0.175 }, result: 110 },
    { input: { lciFee: 0,   incomeTax: 0.175 }, result: 0 },
    { input: { lciFee: 86.4, incomeTax: 0.20 }, result: 108 },
    { input: { lciFee: 108, incomeTax: 0.50 },  result: 216 },
    { input: { lciFee: 140, incomeTax: 1 },     result: 0 }
]

const postFixedCdbToPrefixedData = [
    { input: { postFixedCdbFee: 100, interestRate: 0.12 }, result: 12 },
    { input: { postFixedCdbFee: 0, interestRate: 0.12 }, result: 0 },
    { input: { postFixedCdbFee: 119, interestRate: 0.11 }, result: 13.09 },
    { input: { postFixedCdbFee: 300, interestRate: 0 }, result: 0 }
]

describe("Converters", () => {
    it("Converts a CDB to LCI/LCA properly", () => {
        cdbToLciData.forEach(({ input, result }) => {
            const lci = cdbToLci(input.cdbFee, input.incomeTax);

            expect(lci).toBe(result);    
        })
      })

      it("Converts a LCI/LCA to CDB properly", () => {
        lciToCdbData.forEach(({ input, result }) => {
            const cdb = lciToCdb(input.lciFee, input.incomeTax);

            expect(cdb).toBe(result);    
        })
      })

      it("Converts a CDB post fixed to a CDB prefixed properly", () => {
        postFixedCdbToPrefixedData.forEach(({ input, result }) => {
            const prefixedCdb = postFixedCdbToPrefixed(input.postFixedCdbFee, input.interestRate);

            expect(prefixedCdb).toBe(result);    
        })
      })
})