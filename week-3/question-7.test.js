const sumOfElement = require("./question-7");

test("Write a function to find the sum of all elements in an array ", () => {
  expect(sumOfElement([1, 2, 3, 4, 5])).toBe(15);
});

test("Write a function to find the sum of all elements in an array ", () => {
  expect(sumOfElement([1, 2, 3, 4, 5, -1, -2, -3, -4, -5])).toBe(0);
});

test("Write a function to find the sum of all elements in an array ", () => {
  expect(sumOfElement([3, 7, 4, 6, 9, 1])).toBe(30);
});

test("Write a function to find the sum of all elements in an array ", () => {
  expect(sumOfElement([6, 14, 28, 35, 49, 1, 36, 15, 22, 44])).toBe(250);
});

test("Write a function to find the sum of all elements in an array ", () => {
  expect(sumOfElement([6, 7, 8, 9, 10])).toBe(40);
});
