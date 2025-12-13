/*
20. Count digits in a number 
Description: Find how many digits are in a number. 
Example: 
Input: 
786 
Output: 
3
*/

function Count(number) {
  var countDigit = 1;
  while (number >= 10) {
    number /= 10;
    countDigit++;
  }
  return countDigit;
}

module.exports = Count;
