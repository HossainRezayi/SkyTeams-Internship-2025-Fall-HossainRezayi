/*
19. Reverse a number 
Description: Reverse the digits of an integer. 
Example: 
Input: 
1234 
Output: 
4321
*/

function ReverseNumber(number) {
  var reverse = "";
  for (let index = 0; index < number; index++) {
    reverse += number % 10;
    number = Math.round(number / 10);
    if (number < 10) reverse += number;
  }
  return parseInt(reverse);
}

module.exports = ReverseNumber;
