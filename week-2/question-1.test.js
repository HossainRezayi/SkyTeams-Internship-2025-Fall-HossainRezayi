const swappingTwoVariables = require("./question-1");

test("swapping the place of two gaven variables", () => {
  expect(swappingTwoVariables(5, 10)).toEqual([10, 5]);
});

test("Swapping the places of two gaven variables", () => {
  expect(swappingTwoVariables(5, 10)).not.toEqual([5, 10]);
});

test("Swapping the places of two gaven variables", () => {
  expect(swappingTwoVariables(5, 10)).not.toEqual(
    Array.from({ length: 100 }, (_, index) => index + 1)
  );
});
