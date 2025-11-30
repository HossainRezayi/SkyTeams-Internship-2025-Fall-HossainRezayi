/*
15. Check for Armstrong number 
Description: A number is Armstrong if the sum of its digits raised to the power of the number of 
digits equals the number itself. 
Example: 
Input: 
153 
Output: 
Armstrong 
Input: 
123 
Output: 
Not Armstrong 
*/

function multiply(number, exponent) {
  let sum = 1;

  for (let i = 0; i < exponent; i++) {
    sum *= number;
  }
  return sum;
}

function count(number) {
  let count = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
}

function digitsCount(count, number) {
  let arrayOfDigits = [count];
  for (let i = 0; i < count; i++) {
    arrayOfDigits[i] = number % 10;
    number = Math.floor(number / 10);
  }
  return arrayOfDigits;
}

function isArmstrong(number) {
  let instead = number;
  let count = count(number);
  let digits = digitsCount(count);
  let sumDigits = 0;

  for (let i = 0; i < digits.length; i++) {
    sumDigits += multiply(digits[i], count);
  }

  return sumDigits === instead;
}

module.exports = isArmstrong;
