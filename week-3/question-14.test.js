const findFactorial = require("./question-14");

test("Find factorial of a number ", () => {
  expect(findFactorial(5)).toBe(120);
});

test("Find factorial of a number ", () => {
  expect(findFactorial(6)).toBe(720);
});

test("Find factorial of a number ", () => {
  expect(findFactorial(4)).toBe(24);
});

test("Find factorial of a number ", () => {
  expect(findFactorial(7)).toBe(5040);
});

test("Find factorial of a number ", () => {
  expect(findFactorial(3)).toBe(6);
});
