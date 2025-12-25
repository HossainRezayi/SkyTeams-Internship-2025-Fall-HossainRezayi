const matrixZeroes = require("./question-25");

test("Set Matrix Zeroes ", () => {
  expect(
    matrixZeroes([
      [2, 1],
      [2, 1],
      [1, 0],
    ])
  ).toEqual([
    [2, 0],
    [2, 0],
    [0, 0],
  ]);
});

test("Set Matrix Zeroes - 3x3 with single zero", () => {
  expect(
    matrixZeroes([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ])
  ).toEqual([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]);
});

test("Set Matrix Zeroes - 2x2 with corner zero", () => {
  expect(
    matrixZeroes([
      [1, 2],
      [3, 0],
    ])
  ).toEqual([
    [1, 0],
    [0, 0],
  ]);
});
