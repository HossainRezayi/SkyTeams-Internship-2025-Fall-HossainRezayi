const BodyMassIndex = require("./question-20");

test("Body Mass Index (BMI) Calculator ", () => {
  expect(BodyMassIndex(70, 1.75)).toBe("Normal weight");
});

test("Body Mass Index (BMI) Calculator ", () => {
  expect(BodyMassIndex(66, 1.85)).toBe("Normal weight");
});

test("Body Mass Index (BMI) Calculator ", () => {
  expect(BodyMassIndex(54, 1.78)).toBe("Underweight");
});

test("Body Mass Index (BMI) Calculator ", () => {
  expect(BodyMassIndex(100, 1.85)).toBe("Normal weight");
});

test("Body Mass Index (BMI) Calculator ", () => {
  expect(BodyMassIndex(80, 1.75)).toBe("Normal weight");
});

test("Body Mass Index (BMI) Calculator ", () => {
  expect(BodyMassIndex(88, 1.68)).toBe("Normal weight");
});
