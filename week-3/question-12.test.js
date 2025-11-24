const Palindrome = require("./question-12");

test("Check for palindrome number ", () => {
  expect(Palindrome(121)).toBe("Palindrome");
});

test("Check for palindrome number ", () => {
  expect(Palindrome(123)).toBe("Not Palindrome");
});

test("Check for palindrome number ", () => {
  expect(Palindrome(100)).toBe("Not Palindrome");
});

test("Check for palindrome number ", () => {
  expect(Palindrome(212)).toBe("Palindrome");
});

test("Check for palindrome number ", () => {
  expect(Palindrome(999)).toBe("Palindrome");
});

test("Check for palindrome number ", () => {
  expect(Palindrome(660)).toBe("Not Palindrome");
});
