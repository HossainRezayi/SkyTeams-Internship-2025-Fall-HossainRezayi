const longestPalindromicSubstring = require("./question-21");

test("Longest Palindromic Substring ", () => {
  expect(longestPalindromicSubstring("abccba")).toBe("abccba");
});

test("Longest Palindromic Substring - Odd length palindrome", () => {
  expect(longestPalindromicSubstring("babad")).toBe("bab");
});

test("Longest Palindromic Substring - Odd length palindrome", () => {
  expect(longestPalindromicSubstring("abbaba")).toBe("abba");
});

test("Longest Palindromic Substring - Odd length palindrome", () => {
  expect(longestPalindromicSubstring("zzyzzaba")).toBe("zzyzz");
});
