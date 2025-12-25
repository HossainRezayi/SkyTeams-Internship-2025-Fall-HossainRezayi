const intersection = require("./question-4");

test("Intersection of Two Arrays ", () => {
  expect(intersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
});

test("Intersection of Two Arrays ", () => {
  expect(intersection([6, 7, 8, 9], [6, 10, 8, 3])).toEqual([6, 8]);
});

test("Intersection of Two Arrays ", () => {
  expect(intersection([7, 8, 9], [7, 8, 9])).toEqual([7, 8, 9]);
});

test("Intersection of Two Arrays ", () => {
  expect(intersection([11, 15, 13, 10], [25, 99, 60, 11])).toEqual([11]);
});

test("Intersection of Two Arrays ", () => {
  expect(intersection([0, 1, 2, 3, 4, 5], [5, 4, 3, 0])).toEqual([0, 3, 4, 5]);
});
