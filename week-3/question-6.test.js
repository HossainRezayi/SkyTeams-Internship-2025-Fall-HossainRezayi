const smallestElement = require("./question-6");

test("Write a function to find the smallest element in an array", () => {
  expect(smallestElement([4, 7, 1, 9, 2])).toBe(1);
});

test("Write a function to find the smallest element in an array", () => {
  expect(smallestElement([9, 5, 10, 4, 1, 0])).toBe(0);
});

test("Write a function to find the smallest element in an array", () => {
  expect(smallestElement([1, 7, 4, 8, 0, -10])).toBe(-10);
});

test("Write a function to find the smallest element in an array", () => {
  expect(smallestElement([-100, -10, -88, -43, -22, 0])).toBe(-100);
});

test("Write a function to find the smallest element in an array", () => {
  expect(smallestElement([11, 30, 48, 54, 10, 6])).toBe(6);
});
