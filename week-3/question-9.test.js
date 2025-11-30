const occurrences = require("./question-9");

test("Write a function to count occurrences of an element in an array ", () => {
  expect(occurrences([2, 3, 2, 5, 2], 2)).toBe(3);
});

test("Write a function to count occurrences of an element in an array ", () => {
  expect(occurrences([1, 2, 1, 3, 1, 5, 11, 111], 1)).toBe(3);
});

test("Write a function to count occurrences of an element in an array ", () => {
  expect(occurrences([30, 31, 32, 33, 34, 35, 36, 37, 38], 3)).toBe(0);
});

test("Write a function to count occurrences of an element in an array ", () => {
  expect(occurrences("The Shawshank Redemption", "h")).toBe(3);
});

test("Write a function to count occurrences of an element in an array ", () => {
  expect(occurrences([0, 0.1, 0.2, 0.3, 0.4, 0, 4, 3], 0)).toBe(2);
});
