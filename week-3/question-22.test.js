const collatzSequence = require("./question-22");

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(collatzSequence(6)).toBe(8);
});

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(collatzSequence(4)).toBe(2);
});

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(collatzSequence(3)).toBe(7);
});

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(collatzSequence(5)).toBe(5);
});

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(collatzSequence(10)).toBe(6);
});

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(collatzSequence(13)).toBe(9);
});
