import { describe, it, expect } from "vitest";
import { lciToCdb, cdbToLci } from "../converters";


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

describe("Converts a LCI to a CDB properly", () => {
    it("Converts a LCI to CDB properly", () => {
        cdbToLciData.forEach(({ input, result }) => {
            const lci = cdbToLci(input.cdbFee, input.incomeTax);

            expect(lci).toBe(result);    
        })
      });
})

describe("Converts a CDB to a LCI properly", () => {
    it("Converts a CDB to LCI properly", () => {
        lciToCdbData.forEach(({ input, result }) => {
            const lci = lciToCdb(input.lciFee, input.incomeTax);

            expect(lci).toBe(result);    
        })
      });
})