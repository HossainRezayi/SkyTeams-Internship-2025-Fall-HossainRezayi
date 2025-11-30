const sumDigits = require("./question-3");

test("Sum of digits ", () => {
  expect(sumDigits(123)).toBe(6);
});

test("Sum of digits ", () => {
  expect(sumDigits(8)).toBe(8);
});

test("Sum of digits ", () => {
  expect(sumDigits(100000)).toBe(1);
});

test("Sum of digits ", () => {
  expect(sumDigits(2222)).toBe(8);
});

test("Sum of digits ", () => {
  expect(sumDigits(0)).toBe(0);
});
