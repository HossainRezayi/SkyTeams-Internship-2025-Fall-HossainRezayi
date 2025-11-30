const rearrangeArray = require("./question-5");

test("Rearrange Array (Even Before Odd) ", () => {
  expect(rearrangeArray([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6, 1, 3, 5]);
});

test("Rearrange Array (Even Before Odd) ", () => {
  expect(rearrangeArray([3, 1, 5, 7, 2, 4])).toEqual([2, 4, 3, 1, 5, 7]);
});

test("Rearrange Array (Even Before Odd) ", () => {
  expect(rearrangeArray([1, 4, 3, 8, 5, 10, 12, 15])).toEqual([
    4, 8, 10, 12, 1, 3, 5, 15,
  ]);
});

test("Rearrange Array (Even Before Odd) ", () => {
  expect(rearrangeArray([11, 20, 13, 15, 40, 31])).toEqual([
    20, 40, 11, 13, 15, 31,
  ]);
});
