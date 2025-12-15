/*
26. Convert Decimal to Binary 
Description: Convert a decimal number to its binary representation. 
Example: 
Input: 
10 
Output: 
1010 
*/

function convertDecimalToBinary(number) {
  let digits = "";
  while (number > 0) {
    if (number % 2 === 0) digits += 0;
    else digits += 1;
    number = Math.floor(number / 2);
  }

  let reverse = "";
  for (let i = digits.length - 1; i >= 0; i--) {
    reverse += digits[i];
  }

  return reverse;
}

module.exports = convertDecimalToBinary;
