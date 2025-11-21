const sum = require("./sum");

test("Properly add two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Properly add two numbers", () => {
  expect(sum(1, 2)).toBe(0);
});

test("Properly add two numbers", () => {
  expect(sum(1, 2)) > 0;
});
