const FindFactorial = require("./question-14");

test("Find factorial of a number ", () => {
  expect(FindFactorial(5)).toBe(120);
});

test("Find factorial of a number ", () => {
  expect(FindFactorial(6)).toBe(720);
});

test("Find factorial of a number ", () => {
  expect(FindFactorial(4)).toBe(24);
});

test("Find factorial of a number ", () => {
  expect(FindFactorial(7)).toBe(5040);
});

test("Find factorial of a number ", () => {
  expect(FindFactorial(3)).toBe(6);
});
