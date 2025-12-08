const frequentElements = require("./question-23");

test("Top K Frequent Elements ", () => {
  expect(frequentElements([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
});

test("Top K Frequent Elements - Single element repeated", () => {
  expect(frequentElements([7, 7, 7, 7], 1)).toEqual([7]);
});

test("Top K Frequent Elements - Multiple distinct elements, K=1", () => {
  expect(frequentElements([1, 2, 3, 4, 5, 1, 2, 1], 1)).toEqual([1]);
});

test("Top K Frequent Elements - Different Frequencies", () => {
  expect(frequentElements([1, 2, 3, 4, 1, 2, 1, 3, 1, 4, 4], 2)).toEqual([
    1, 4,
  ]);
});
