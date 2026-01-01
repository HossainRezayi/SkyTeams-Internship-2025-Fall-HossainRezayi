const isStrongPassword = require("./question-21");

test("Password Strength Checker ", () => {
  expect(isStrongPassword("MyPass123")).toBe(true);
});

test("Password Strength Checker ", () => {
  expect(isStrongPassword("R4d7mN0p")).toBe(true);
});

test("Password Strength Checker ", () => {
  expect(isStrongPassword("L9kP2sM8")).toBe(true);
});

test("Password Strength Checker ", () => {
  expect(isStrongPassword("B5gJ6uC3")).toBe(true);
});

test("Password Strength Checker ", () => {
  expect(isStrongPassword("F1hT8rY4")).toBe(true);
});

test("Password Strength Checker ", () => {
  expect(isStrongPassword("Q3vD5wX7")).toBe(true);
});

test("Password Strength Checker ", () => {
  expect(isStrongPassword("Z8yC1mN6")).toBe(true);
});
