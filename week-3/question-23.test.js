const factorialWithRecursion = require("./question-23");

test("Calculate Factorial Using Recursion ", () => {
  expect(factorialWithRecursion(5)).toBe(120);
});

test("Calculate Factorial Using Recursion ", () => {
  expect(factorialWithRecursion(4)).toBe(24);
});

test("Calculate Factorial Using Recursion ", () => {
  expect(factorialWithRecursion(6)).toBe(720);
});

test("Calculate Factorial Using Recursion ", () => {
  expect(factorialWithRecursion(0)).toBe(1);
});

test("Calculate Factorial Using Recursion ", () => {
  expect(factorialWithRecursion(3)).toBe(6);
});

test("Calculate Factorial Using Recursion ", () => {
  expect(factorialWithRecursion(7)).toBe(5040);
});
