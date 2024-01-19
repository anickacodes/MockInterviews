const {
  wordsReversal,
  fibGenerator,
  convertArrayToObject,
  isPalindrome,
} = require("../questions");

describe("wordsReversal", () => {
  test("should reverse the order of words in a string", () => {
    const input = "Joy Lives";
    const expected = "Lives Joy";
    expect(wordsReversal(input)).toBe(expected);
  });
});

describe("convertArrayToObject", () => {
  test("converts an array of key-value pairs to an object", () => {
    const keyValuePairs = [
      ["username", "dcode"],
      ["memberSince", "2020-04-06"],
      ["age", 35],
    ];

    const expected = {
      username: "dcode",
      memberSince: "2020-04-06",
      age: 35,
    };

    expect(convertArrayToObject(keyValuePairs)).toEqual(expected);
  });
  test("handles an empty array", () => {
    expect(convertArrayToObject([])).toEqual({});
  });
});

describe("isPalindrome", () => {
  test("should return true for a simple palindrome", () => {
    expect(isPalindrome("madam")).toBe(true);
  });

  test("should return true for a palindrome with mixed cases and spaces", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  test("should return false for a non-palindrome string", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("should return true for a numeric palindrome", () => {
    expect(isPalindrome("12321")).toBe(true);
  });

  test("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });
});
