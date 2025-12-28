const Count = require("./question-20");

test("Count digits in a number ", () => {
  expect(Count(789)).toBe(3);
});

test("Count digits in a number ", () => {
  expect(Count(12123434)).toBe(8);
});

test("Count digits in a number ", () => {
  expect(Count(8)).toBe(1);
});

test("Count digits in a number ", () => {
  expect(Count(100000)).toBe(6);
});
