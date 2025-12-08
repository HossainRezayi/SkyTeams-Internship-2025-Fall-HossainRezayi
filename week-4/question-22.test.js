const mergeIntervals = require("./question-22");

test("Merge Overlapping Intervals ", () => {
  expect(
    mergeIntervals([
      [1, 3],
      [2, 6],
      [8, 10],
    ])
  ).toEqual([
    [1, 6],
    [8, 10],
  ]);
});
test("Merge Overlapping Intervals - Fully Contained", () => {
  expect(
    mergeIntervals([
      [1, 4],
      [2, 3],
      [5, 9],
      [8, 10],
    ])
  ).toEqual([
    [1, 4],
    [5, 10],
  ]);
});

test("Merge Overlapping Intervals - Complex Overlaps and Sorting Needed", () => {
  expect(
    mergeIntervals([
      [4, 5],
      [1, 4],
      [0, 1],
    ])
  ).toEqual([[0, 5]]);
});
