const multiplicationMatrix = require("./question-16");

test("Matrix Multiplication", () => {
  expect(
    multiplicationMatrix(
      [
        [1, 2],
        [3, 4],
      ],
      [
        [5, 6],
        [7, 8],
      ]
    )
  ).toEqual([
    [19, 22],
    [43, 50],
  ]);
});

test("Matrix Multiplication", () => {
  expect(
    multiplicationMatrix(
      [
        [1, 2],
        [2, -1],
      ],
      [
        [2, -1],
        [1, 2],
      ]
    )
  ).toEqual([
    [4, 3],
    [3, -4],
  ]);
});

test("Matrix Multiplication with rectangular matrices (2x3 * 3x2)", () => {
  expect(
    multiplicationMatrix(
      [
        [1, 4, 2],
        [0, 3, -1],
      ],
      [
        [3, 1],
        [2, 4],
        [1, 5],
      ]
    )
  ).toEqual([
    [13, 27],
    [5, 7],
  ]);
});
