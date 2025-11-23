const ReverseNumber = require("./question-2");

test("Reverse a number ", () => {
  expect(ReverseNumber(1234)).toBe(4321);
});

test("Reverse a number ", () => {
  expect(ReverseNumber(121212)).toBe(212121);
});

test("Reverse a number ", () => {
  expect(ReverseNumber(789)).toBe(987);
});

test("Reverse a number ", () => {
  expect(ReverseNumber(456)).toBe(654);
});

test("Reverse a number ", () => {
  expect(ReverseNumber(56)).toBe(65);
});

test("Reverse a number ", () => {
  expect(ReverseNumber(102)).toBe(201);
});
