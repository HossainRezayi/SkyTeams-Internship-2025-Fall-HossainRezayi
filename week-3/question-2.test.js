const reverseNumber = require("./question-2");

test("Reverse a number ", () => {
  expect(reverseNumber(1234)).toBe(4321);
});

test("Reverse a number ", () => {
  expect(reverseNumber(121212)).toBe(212121);
});

test("Reverse a number ", () => {
  expect(reverseNumber(789)).toBe(987);
});

test("Reverse a number ", () => {
  expect(reverseNumber(456)).toBe(654);
});

test("Reverse a number ", () => {
  expect(reverseNumber(56)).toBe(65);
});

test("Reverse a number ", () => {
  expect(reverseNumber(102)).toBe(201);
});
