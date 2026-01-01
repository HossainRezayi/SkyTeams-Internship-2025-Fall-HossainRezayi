const bodyMassIndex = require("./question-20");

test("Body Mass Index (BMI) Calculator ", () => {
  expect(bodyMassIndex(70, 1.75)).toBe("Normal weight");
});

test("Body Mass Index (BMI) Calculator ", () => {
  expect(bodyMassIndex(66, 1.85)).toBe("Normal weight");
});

test("Body Mass Index (BMI) Calculator ", () => {
  expect(bodyMassIndex(54, 1.78)).toBe("Underweight");
});

test("Body Mass Index (BMI) Calculator ", () => {
  expect(bodyMassIndex(100, 1.85)).toBe("Normal weight");
});

test("Body Mass Index (BMI) Calculator ", () => {
  expect(bodyMassIndex(80, 1.75)).toBe("Normal weight");
});

test("Body Mass Index (BMI) Calculator ", () => {
  expect(bodyMassIndex(88, 1.68)).toBe("Normal weight");
});
