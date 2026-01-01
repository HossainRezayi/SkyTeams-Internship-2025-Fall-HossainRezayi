const palindrome = require("./question-12");

test("Check for palindrome number ", () => {
  expect(palindrome(121)).toBe("Palindrome");
});

test("Check for palindrome number ", () => {
  expect(palindrome(123)).toBe("Not Palindrome");
});

test("Check for palindrome number ", () => {
  expect(palindrome(100)).toBe("Not Palindrome");
});

test("Check for palindrome number ", () => {
  expect(palindrome(212)).toBe("Palindrome");
});

test("Check for palindrome number ", () => {
  expect(palindrome(999)).toBe("Palindrome");
});

test("Check for palindrome number ", () => {
  expect(palindrome(660)).toBe("Not Palindrome");
});
