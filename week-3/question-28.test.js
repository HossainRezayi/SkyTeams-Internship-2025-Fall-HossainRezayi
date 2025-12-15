const RemoveDuplicates = require("./question-28");

test("Remove Duplicates from an Array ", () => {
  expect(RemoveDuplicates([3, 1, 3, 5, 1])).toEqual([3, 5, 1]);
});

test("Remove Duplicates from an Array ", () => {
  expect(RemoveDuplicates([1, 2, 3, 1, 3])).toEqual([2, 1, 3]);
});

test("Remove Duplicates from an Array ", () => {
  expect(RemoveDuplicates([3, 3, 3, 2, 2, 2, 0])).toEqual([3, 2, 0]);
});
