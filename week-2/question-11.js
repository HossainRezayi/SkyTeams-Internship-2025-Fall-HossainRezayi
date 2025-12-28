/*
11. Simple Calculator using switch-case 
Description: Input two numbers and an operator (+, -, *, /) and compute the result. 
Example: 
Input: 
5, 3, + 
Output: 
8 
*/

function SimpleCalculator(num1, num2, operator) {
  var result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = Math.round(num1 / num2);
      break;

    case "*":
      result = num1 * num2;
      break;
    default:
      result = -1;
  }
  return result;
}

module.exports = SimpleCalculator;
