const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Should encode a message using The Caesar shift.", () => {
  it("Function should return false if shift value isn't present.", () => {
    expected = false;
    actual = caesar("random");
    expect(actual).to.equal(expected);
  });

  it("Function should return false if shift value is is equal to 0.", () => {
    expected = false;
    actual = caesar("random", 0);
    expect(actual).to.equal(expected);
  });

  it("Function should return false if shift value is less than -25", () => {
    expected = false;
    actual = caesar("random", -27);
    expect(actual).to.equal(expected);
  });

  it("Function should ignore capitol letters.", () => {
    expected = "ifz";
    actual = caesar("Hey", 1);
    expect(actual).to.equal(expected);
  });

  it("Function handles shifts that go past the end of the alphabet.", () => {
    expected = "crh";
    actual = caesar("zoe", 3);
    expect(actual).to.equal(expected);
  });

  it("Function maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
    expected = "apf lzofs";
    actual = caesar("zoe kyner", 1);
    expect(actual).to.equal(expected);
  });
});
