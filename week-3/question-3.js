/*
 21. Sum of digits 
Description: Calculate the sum of all digits of a number. 
Example: 
Input: 
123 
Output: 
6
*/

function SumDigits(number) {
  var sum = 0;
  do {
    sum += number % 10;
    number = Math.floor(number / 10);
  } while (number > 0);

  return sum;
}

module.exports = SumDigits;
