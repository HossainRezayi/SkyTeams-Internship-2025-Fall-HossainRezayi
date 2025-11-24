/*
2. Reverse a number 
Description: Reverse the digits of an integer. 
Example: 
Input: 
1234 
Output: 
4321
*/

function ReverseNumber(number) {
  var reverse = "";
  while (number > 0) {
    reverse += number % 10;
    number = Math.floor(number / 10);
  }
  return parseInt(reverse);
}

module.exports = ReverseNumber;
