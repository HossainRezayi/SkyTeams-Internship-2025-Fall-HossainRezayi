const ComputeSimpleAndCompoundInterest = require("./question-5");

test("Compute Simple and Compound Interest ", () => {
  expect(ComputeSimpleAndCompoundInterest(1000, 5, 2)).toEqual([100, 102.5]);
});

test("Compute Simple and Compound Interest ", () => {
  expect(ComputeSimpleAndCompoundInterest(100, 5, 2)).not.toEqual(
    Math.floor(Math.random() * 100) + 1
  );
});

// SIMPLE FIRST
test("Compute Simple and Compound Interest ", () => {
  expect(ComputeSimpleAndCompoundInterest(1000, 5, 2)).not.toEqual([
    102.5, 100,
  ]);
});
