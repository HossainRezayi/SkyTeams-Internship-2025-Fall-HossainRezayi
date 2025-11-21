const largestAndSmallest = require("./question-2");

test("Find the largest and smallest numbers from gaven arrays of numbers", () => {
  expect(largestAndSmallest([3, 9, 5])).toEqual([9, 3]);
});

test("Find the largest and smallest numbers from gaven arrays of numbers", () => {
  expect(largestAndSmallest([3, 9, 5])).not.toEqual([9, 5]);
});

test("Find the largest and smallest numbers from gaven arrays of numbers", () => {
  expect(largestAndSmallest([3, 9, 5])).not.toEqual([5, 3]);
});
