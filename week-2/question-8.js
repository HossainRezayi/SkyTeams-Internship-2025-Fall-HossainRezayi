/*
8. Determine if a number is positive, negative, or zero 
Description: Use if-else statements to categorize a number. 
Example: 
Input: -3 
Output: 
Negative
*/

function DetermineSign(number) {
  var sign;
  if (number > 0) sign = "Positive";
  else if (number < 0) sign = "Negative";
  else sign = "Zero";

  return sign;
}

module.exports = DetermineSign;
