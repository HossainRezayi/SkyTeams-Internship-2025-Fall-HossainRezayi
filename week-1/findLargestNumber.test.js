const FindLargestNumber = require("./findLargestNumber");

test("Find the largest number from a list(array) of numbers", () => {
  expect(FindLargestNumber([2, 5, 4, 9, 7])).toBe(9);
});

test("Find the largest number from a list(array) of numbers", () => {
  expect(FindLargestNumber([2, 5, 4, 9, 7])) > 9;
});

test("Find the largest number from a list(array) of numbers", () => {
  expect(FindLargestNumber([2, 5, 4, 9, 7])).not.toBe(2);
});
