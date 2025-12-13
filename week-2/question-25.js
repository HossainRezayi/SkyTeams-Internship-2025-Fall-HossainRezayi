/*
25. Find LCM of two numbers 
Description: Compute least common multiple using the relationship: LCM(a, b) = (a × b) / 
GCD(a, b) 
Example: 
Input: 
12, 18 
Output: 
36 
*/

function LCM(num1, num2) {
  var result;
  for (let index = 1; index <= num2; index++) {
    if ((num1 * index) % num2 === 0) {
      result = num1 * index;
      break;
    }
  }

  return result;
}

module.exports = LCM;
