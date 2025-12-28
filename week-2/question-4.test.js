const TemperatureConverter = require("./question-4");

test("Convert temperature from Celsius to Fahrenheit and vice versa.", () => {
  // Converting Celsius to Fahrenheit and vise versa first argument should be amount, second should be type: C for Celsius and F for Fahrenheit
  expect(TemperatureConverter(25, "C")).toEqual(77);
});

test("Convert temperature from Celsius to Fahrenheit and vice versa.", () => {
  expect(TemperatureConverter(77, "F")).toEqual(25);
});
