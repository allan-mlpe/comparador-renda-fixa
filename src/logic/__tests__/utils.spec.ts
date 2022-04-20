import { describe, it, expect } from "vitest";
import { generateRandomId, roundDecimalPlaces } from "../utils";

describe("GenerateRandomId", () => {
  it("Creates a random id with 5 digits", () => {
    const randomId = generateRandomId();

    expect(randomId).toMatch(/^[a-z0-9]{5}$/);
  });
});

describe("RoundDecimalPlaces", () => {
  it("Rounds a number to 2 decimal places as default", () => {
    const roundedNumber = roundDecimalPlaces(10.01233101221);

    expect(roundedNumber).toBe("10.01");
  });

  it("Rounds an integer number to the exact number of decimal places passed as parameter", () => {
    const roundedNumber = roundDecimalPlaces(10, 5);

    expect(roundedNumber).toBe("10.00000");
  });

  it("Rounds a random number to the exact number of decimal places passed as parameter", () => {
    const randomNumber = Math.random() * 1000;
    const randomDecimalPlaces = Math.ceil(Math.random() * 10);

    const roundedNumber = roundDecimalPlaces(randomNumber, randomDecimalPlaces);
    const decimalPlacesLength = roundedNumber.split(".")[1]
      ? roundedNumber.split(".")[1].length
      : 0;

    expect(decimalPlacesLength).toBe(randomDecimalPlaces);
  });
});
