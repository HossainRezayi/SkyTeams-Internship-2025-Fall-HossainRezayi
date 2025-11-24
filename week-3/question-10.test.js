const PrimeNumber = require("./question-10");

test("Check whether a number is prime ", () => {
  expect(PrimeNumber(17)).toBe("Prime");
});

test("Check whether a number is prime ", () => {
  expect(PrimeNumber(20)).toBe("Not Prime");
});

test("Check whether a number is prime ", () => {
  expect(PrimeNumber(3)).toBe("Prime");
});

test("Check whether a number is prime ", () => {
  expect(PrimeNumber(100)).toBe("Not Prime");
});

test("Check whether a number is prime ", () => {
  expect(PrimeNumber(101)).toBe("Prime");
});

test("Check whether a number is prime ", () => {
  expect(PrimeNumber(1019)).toBe("Prime");
});
