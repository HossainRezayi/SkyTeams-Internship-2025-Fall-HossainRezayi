/*
17. Sum of first N natural numbers 
Description: Calculate and print the sum using a loop. 
Example: 
Input: 
5 
Output: 
15
*/

function SumOfN_Number(number) {
  if (number <= 0) return null;
  var sum = 0;
  for (let index = number; index > 0; index--) {
    sum += index;
  }
  return sum;
}

module.exports = SumOfN_Number;
