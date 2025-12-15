const primeNumber = require("./question-10");

test("Check whether a number is prime ", () => {
  expect(primeNumber(17)).toBe("Prime");
});

test("Check whether a number is prime ", () => {
  expect(primeNumber(20)).toBe("Not Prime");
});

test("Check whether a number is prime ", () => {
  expect(primeNumber(3)).toBe("Prime");
});

test("Check whether a number is prime ", () => {
  expect(primeNumber(100)).toBe("Not Prime");
});

test("Check whether a number is prime ", () => {
  expect(primeNumber(101)).toBe("Prime");
});

test("Check whether a number is prime ", () => {
  expect(primeNumber(1019)).toBe("Prime");
});
