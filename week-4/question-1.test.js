const secondLargestNumber = require("./question-1");

test("Find Second Largest Number in an Array", () => {
  expect(secondLargestNumber([10, 20, 4, 45, 99])).toBe(45);
});

test("Find Second Largest Number in an Array", () => {
  expect(secondLargestNumber([1, 2, 3, 4, 5])).toBe(4);
});

test("Find Second Largest Number in an Array", () => {
  expect(secondLargestNumber([-1, -4, -6, -9, 0])).toBe(-1);
});

test("Find Second Largest Number in an Array", () => {
  expect(secondLargestNumber([-5, 1, -9, -3, -2])).toBe(-2);
});

test("Find Second Largest Number in an Array", () => {
  expect(secondLargestNumber([7, 9, 3, 1, 6])).toBe(7);
});
