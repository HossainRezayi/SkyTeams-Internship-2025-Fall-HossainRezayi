const binarySearch = require("./question-6");

test("Binary Search Algorithm", () => {
  expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
});

test("Binary Search Algorithm", () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6], 6)).toBe(5);
});

test("Binary Search Algorithm", () => {
  expect(binarySearch([1, 2, 3, 4], 1)).toBe(0);
});

test("Binary Search Algorithm", () => {
  expect(binarySearch([7, 8, 9, 11, 15], 11)).toBe(3);
});

test("Binary Search Algorithm", () => {
  expect(binarySearch([2, 4, 6, 8, 10], 4)).toBe(1);
});
