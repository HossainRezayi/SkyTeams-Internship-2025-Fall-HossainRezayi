const balancedParentheses = require("./question-20");

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("{[()]}")).toBe("Balanced");
});

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("{}")).toBe("Balanced");
});

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("([{}])")).toBe("Balanced");
});

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("({{[]}})")).toBe("Balanced");
});

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("(((())))")).toBe("Balanced");
});

test("Check Balanced Parentheses", () => {
  expect(balancedParentheses("{[(}])")).toBe("Not Balanced");
});
