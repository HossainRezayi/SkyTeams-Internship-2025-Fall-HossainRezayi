const kthLargestElement = require("./question-24");

test("K-th Largest Element", () => {
  expect(kthLargestElement([7, 2, 10, 4, 9], 3)).toBe(7);
});

test("K-th Largest Element", () => {
  expect(kthLargestElement([10, 2, 4, 7, 9], 2)).toBe(9);
});

test("K-th Largest Element", () => {
  expect(kthLargestElement([0, 3, 1, 7, 5, 10], 6)).toBe(0);
});

test("K-th Largest Element", () => {
  expect(kthLargestElement([-2, -10, -5, -100, 0], 1)).toBe(0);
});

test("K-th Largest Element", () => {
  expect(kthLargestElement([-1, -10, -100, -1000], 1)).toBe(-1);
});
