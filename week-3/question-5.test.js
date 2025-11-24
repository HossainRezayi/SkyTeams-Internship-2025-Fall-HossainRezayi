const LargestElement = require("./question-5");

test("Write a function to find the largest element in an array ", () => {
  expect(LargestElement([2, 8, 5, 3, 9])).toBe(9);
});

test("Write a function to find the largest element in an array ", () => {
  expect(LargestElement([4, 8, 5, 2, 1])).toBe(8);
});

test("Write a function to find the largest element in an array ", () => {
  expect(LargestElement([7, 6, 5, 4, 3, 2, 1])).toBe(7);
});

test("Write a function to find the largest element in an array ", () => {
  expect(LargestElement([0, 10, 20, 100, 90, 80, 70])).toBe(100);
});

test("Write a function to find the largest element in an array ", () => {
  expect(LargestElement([60, 54, 48, 42, 36, 30, 24])).toBe(60);
});
