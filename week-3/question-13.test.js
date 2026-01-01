const powerOfNumber = require("./question-13");

test("Power of a number (without built-in function)", () => {
  expect(powerOfNumber(2, 5)).toBe(32);
});

test("Power of a number (without built-in function)", () => {
  expect(powerOfNumber(5, 2)).toBe(25);
});

test("Power of a number (without built-in function)", () => {
  expect(powerOfNumber(10, 3)).toBe(1000);
});

test("Power of a number (without built-in function)", () => {
  expect(powerOfNumber(3, 4)).toBe(81);
});

test("Power of a number (without built-in function)", () => {
  expect(powerOfNumber(1, 20)).toBe(1);
});

test("Power of a number (without built-in function)", () => {
  expect(powerOfNumber(20, 1)).toBe(20);
});
