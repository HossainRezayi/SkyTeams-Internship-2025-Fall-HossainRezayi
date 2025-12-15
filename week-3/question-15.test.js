const isArmstrong = require("./question-15");

test("Check for Armstrong number ", () => {
  expect(isArmstrong(153)).toBe(true);
});

test("Check for Armstrong number ", () => {
  expect(isArmstrong(123)).toBe(false);
});

test("Check for Armstrong number ", () => {
  expect(isArmstrong(370)).toBe(true);
});

test("Check for Armstrong number ", () => {
  expect(isArmstrong(371)).toBe(true);
});

test("Check for Armstrong number ", () => {
  expect(isArmstrong(200)).toBe(false);
});
