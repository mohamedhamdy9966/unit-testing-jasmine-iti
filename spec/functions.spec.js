const { capitalizeTextFirstChar, createArray, random } = require("../functions");

describe("capitalizeTextFirstChar", () => {
  it("should return a string", () => {
    const result = capitalizeTextFirstChar("hello world");
    expect(typeof result).toBe("string");
  });

  it("should capitalize every word's first character", () => {
    const result = capitalizeTextFirstChar("i'm ahmed ali");
    expect(result).toBe("I'm Ahmed Ali");
  });

  it("should throw a type error if input is not string", () => {
    expect(() => capitalizeTextFirstChar(12)).toThrowError(
      TypeError,
      "parameter should be string"
    );
  });
});

describe("createArray", () => {
  it("should return an array", () => {
    const result = createArray(3);
    expect(Array.isArray(result)).toBeTrue();
  });

  it("should return an array of length 2 that includes 1", () => {
    const result = createArray(2);
    expect(result.length).toBe(2);
    expect(result.includes(1)).toBeTrue();
  });

  it("should return an array of length 3 and not include 3", () => {
    const result = createArray(3);
    expect(result.length).toBe(3);
    expect(result.includes(3)).toBeFalse();
  });
});

describe("random", () => {
  it("should return a number", () => {
    const result = random(1, 10);
    expect(typeof result).toBe("number");
  });

  it("should return a number >= 5 and <= 7", () => {
    const result = random(5, 7);
    expect(result >= 5 && result <= 7).toBeTrue();
  });

  it("should return NaN if one parameter is passed", () => {
    const result = random(5);
    expect(isNaN(result)).toBeTrue();
  });
});
