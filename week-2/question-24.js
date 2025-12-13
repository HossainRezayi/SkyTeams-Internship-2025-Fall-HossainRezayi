/*
24. Find GCD of two numbers 
Description: Compute the greatest common divisor using repeated subtraction or the Euclidean 
algorithm. 
Example: 
Input: 
12, 18 
Output: 
6 
*/

function GCD(num1, num2) {
  var num = num1 < num2 ? num1 : num2;
  var result;

  for (let index = 1; index <= num; index++) {
    if (num1 % index === 0 && num2 % index === 0) result = index;
  }

  return result;
}

module.exports = GCD;
