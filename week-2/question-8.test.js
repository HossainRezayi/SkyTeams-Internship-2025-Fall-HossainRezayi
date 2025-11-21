const DetermineSign = require("./question-8");

test("Determine if a number is positive, negative, or zero ", () => {
  expect(DetermineSign(-3)).toBe("Negative");
});

test("Determine if a number is positive, negative, or zero ", () => {
  expect(DetermineSign(0)).toBe("Zero");
});

test("Determine if a number is positive, negative, or zero ", () => {
  expect(DetermineSign(3)).toBe("Positive");
});
