const FactorialWithRecursion = require("./question-23");

test("Calculate Factorial Using Recursion ", () => {
  expect(FactorialWithRecursion(5)).toBe(120);
});

test("Calculate Factorial Using Recursion ", () => {
  expect(FactorialWithRecursion(4)).toBe(24);
});

test("Calculate Factorial Using Recursion ", () => {
  expect(FactorialWithRecursion(6)).toBe(720);
});

test("Calculate Factorial Using Recursion ", () => {
  expect(FactorialWithRecursion(0)).toBe(1);
});

test("Calculate Factorial Using Recursion ", () => {
  expect(FactorialWithRecursion(3)).toBe(6);
});

test("Calculate Factorial Using Recursion ", () => {
  expect(FactorialWithRecursion(7)).toBe(5040);
});
