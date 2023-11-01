const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Should encode or decode a message using a polybius square", () => {
  it("When encoding, it translates the letters i and j to 42.", () => {
    expected = "42 42";
    actual = polybius("i j");
    expect(actual).to.equal(expected);
  });

  it("should decode 42 to '(i/j)'", () => {
    actual = polybius("42", false);
    expect(actual).to.equal("(i/j)");
  });

  it("It ignores capital letters.", () => {
    expected = "112131";
    actual = polybius("ABC");
    expect(actual).to.equal(expected);
  });

  it("It maintains spaces in the message, before and after encoding or decoding.", () => {
    expected = "11 21";
    actual = polybius("A B");
    expect(actual).to.equal(expected);
  });
});
