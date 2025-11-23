const SumDigits = require("./question-3");

test("Sum of digits ", () => {
  expect(SumDigits(123)).toBe(6);
});

test("Sum of digits ", () => {
  expect(SumDigits(8)).toBe(8);
});

test("Sum of digits ", () => {
  expect(SumDigits(100000)).toBe(1);
});

test("Sum of digits ", () => {
  expect(SumDigits(2222)).toBe(8);
});

test("Sum of digits ", () => {
  expect(SumDigits(0)).toBe(0);
});
