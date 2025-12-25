const mergeArray = require("./question-2");

test("Merge Two Sorted Arrays ", () => {
  expect(mergeArray([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test("Merge Two Sorted Arrays ", () => {
  expect(mergeArray([2, 4, 6], [1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
});

test("Merge Two Sorted Arrays ", () => {
  expect(mergeArray([2, 5, 9], [1, 6, 10])).toEqual([1, 2, 5, 6, 9, 10]);
});
