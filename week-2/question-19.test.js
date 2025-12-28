const ReverseNumber = require("./question-19");

test("Reverse a number ", () => {
  expect(ReverseNumber(1234)).toBe(4321);
});

test("Reverse a number ", () => {
  expect(ReverseNumber(121212)).toBe(212121);
});
