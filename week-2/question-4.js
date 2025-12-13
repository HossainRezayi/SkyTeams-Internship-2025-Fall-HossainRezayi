/*
4. Temperature converter (Celsius ↔ Fahrenheit) 
Description: Convert temperature from Celsius to Fahrenheit and vice versa. 
Formula: 
F = (C × 9/5) + 32 
C = (F - 32) × 5/9 
Example: 
Input: 
C = 25 
Output: 
F = 77 
*/

function TemperatureConverter(temperature, type) {
  var converter;
  if (type === "C") converter = temperature * (9 / 5) + 32;
  else if (type === "F") converter = (temperature - 32) * (5 / 9);

  return converter;
}

module.exports = TemperatureConverter;
