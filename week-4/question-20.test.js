const balancedParentheses = require("./question-20");

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("{[()]}")).toBe(true);
});

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("{}")).toBe(true);
});

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("([{}])")).toBe(true);
});

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("({{[]}})")).toBe(true);
});

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("(((())))")).toBe(true);
});

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("{[(}])")).toBe(false);
});
