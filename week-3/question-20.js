/*
20. Body Mass Index (BMI) Calculator 
Description: Given weight (kg) and height (m), calculate BMI using: 
BMI = weight / (height * height) 
Then categorize it into: 
• Underweight: BMI < 18.5 
• Normal weight: 18.5 ≤ BMI < 25 
• Overweight: 25 ≤ BMI < 30 
• Obese: BMI ≥ 30 
Example: 
Input: 
70, 1.75 
Output: 
BMI = 22.86 (Normal weight) 
*/

function bodyMassIndex(weight, height) {
  let bmi = weight / (height * height).toFixed(2);
  let result = "";

  if (bmi < 18.5) result = "Underweight";
  else if (bmi < 25) result = "Normal weight";
  else if (bmi < 30) result = "Overweight";
  else if (bmi >= 30) result = "Obese";
  else result = "Out range";

  return result;
}

module.exports = bodyMassIndex;
