const SimpleCalculator = require("./question-11");

test("Simple Calculator using switch-case ", () => {
  expect(SimpleCalculator(5, 3, "+")).toBe(8);
});

test("Simple Calculator using switch-case ", () => {
  expect(SimpleCalculator(5, 3, "-")).toBe(2);
});

test("Simple Calculator using switch-case ", () => {
  expect(SimpleCalculator(5, 3, "/")).toBe(2);
});

test("Simple Calculator using switch-case ", () => {
  expect(SimpleCalculator(5, 3, "*")).toBe(15);
});
