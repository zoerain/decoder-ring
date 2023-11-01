// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Function encodes or decodes a message using the substitution cipher", () => {
  it("Function returns false if the given alphabet isn't exactly 26 characters long.", () => {
    expected = false;
    actual = substitution("random", "abcdefgh");
    expect(actual).to.equal(expected);
  });

  it("Function correctly translates the given phrase, based on the alphabet given to the function.", () => {
    expected = "xoy";
    actual = substitution("abc", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });

  it("Function returns false if there are any duplicate characters in the given alphabet.", () => {
    expected = false;
    actual = substitution("random", "xoyqmcgrukswaflnthdjpzibvv");
    expect(actual).to.equal(expected);
  });

  it("Function maintains spaces in the message, before and after encoding or decoding.", () => {
    expected = "x o";
    actual = substitution("a b", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });

  it("Function ignores capital letters.", () => {
    expected = "x o";
    actual = substitution("A B", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
});