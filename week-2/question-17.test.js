const SumOfN_Number = require("./question-17");

test("Sum of first N natural numbers", () => {
  expect(SumOfN_Number(5)).toBe(15);
});

test("Sum of first N natural numbers", () => {
  expect(SumOfN_Number(10)).toBe(55);
});

test("Sum of first N natural numbers", () => {
  expect(SumOfN_Number(-3)).toBe(6);
});
