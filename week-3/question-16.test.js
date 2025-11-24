const FibonacciSerie = require("./question-16");

test("Fibonacci series up to N terms ", () => {
  expect(FibonacciSerie(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});

test("Fibonacci series up to N terms ", () => {
  expect(FibonacciSerie(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
});

test("Fibonacci series up to N terms ", () => {
  expect(FibonacciSerie(11)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});

test("Fibonacci series up to N terms ", () => {
  expect(FibonacciSerie(13)).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,
  ]);
});
