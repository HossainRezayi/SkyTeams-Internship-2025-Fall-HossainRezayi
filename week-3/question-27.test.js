const uniqueElement = require("./question-27");

test("Find Unique Elements in an Array", () => {
  expect(uniqueElement([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 3, 5]);
});

test("Find Unique Elements in an Array", () => {
  expect(uniqueElement([6, 6, 7, 7, 8, 9])).toEqual([8, 9]);
});

test("Find Unique Elements in an Array", () => {
  expect(uniqueElement([1, 7, 3, 9, 9, 1, 3])).toEqual([7]);
});

test("Find Unique Elements in an Array", () => {
  expect(uniqueElement([1, 4, 0, 4, 1, 0.45, 0.89])).toEqual([0, 0.45, 0.89]);
});

test("Find Unique Elements in an Array", () => {
  expect(uniqueElement([11, 15, 13, 17, 19])).toEqual([11, 15, 13, 17, 19]);
});
