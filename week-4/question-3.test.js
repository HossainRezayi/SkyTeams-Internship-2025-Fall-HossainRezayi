const rotateToRight = require("./question-3");

test("Rotate Array K Times to the Right ", () => {
  expect(rotateToRight([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
});

test("Rotate Array K Times to the Right ", () => {
  expect(rotateToRight([2, 4, 6, 8, 10], 3)).toEqual([6, 8, 10, 2, 4]);
});

test("Rotate Array K Times to the Right ", () => {
  expect(rotateToRight([11, 15, 17], 1)).toEqual([17, 11, 15]);
});

test("Rotate Array K Times to the Right ", () => {
  expect(rotateToRight([6, 7, 8, 9, 10, 11, 12, 13], 5)).toEqual([
    9, 10, 11, 12, 13, 6, 7, 8,
  ]);
});

test("Rotate Array K Times to the Right ", () => {
  expect(rotateToRight([4, 8, 16, 64, 128], 4)).toEqual([8, 16, 64, 128, 4]);
});
