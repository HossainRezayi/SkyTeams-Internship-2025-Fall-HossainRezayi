/*
13. Power of a number (without built-in function) 
Description: Compute a^b using repeated multiplication. 
Example: 
Input: 
2, 5 
Output: 
32 
*/

function powerOfNumber(number, power) {
  var result = 1;
  for (let index = 1; index <= power; index++) {
    result *= number;
  }
  return result;
}

module.exports = powerOfNumber;
