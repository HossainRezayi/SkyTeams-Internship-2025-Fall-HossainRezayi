const CollatzSequence = require("./question-22");

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(CollatzSequence(6)).toBe(8);
});

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(CollatzSequence(4)).toBe(2);
});

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(CollatzSequence(3)).toBe(7);
});

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(CollatzSequence(5)).toBe(5);
});

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(CollatzSequence(10)).toBe(6);
});

test("Collatz Sequence (Hailstone Numbers) ", () => {
  expect(CollatzSequence(13)).toBe(9);
});
