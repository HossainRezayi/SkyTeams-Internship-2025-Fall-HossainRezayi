const GCD = require("./question-24");

test("Find GCD of two numbers ", () => {
  expect(GCD(12, 18)).toBe(6);
});

test("Find GCD of two numbers ", () => {
  expect(GCD(12, 6)).toBe(6);
});

test("Find GCD of two numbers ", () => {
  expect(GCD(2, 3)).toBe(1);
});

test("Find GCD of two numbers ", () => {
  expect(GCD(100, 40)).toBe(20);
});

test("Find GCD of two numbers ", () => {
  expect(GCD(1, 101)).toBe(1);
});

test("Find GCD of two numbers ", () => {
  expect(GCD(86, 42)).toBe(2);
});
