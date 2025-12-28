/*
7. Check whether a number is even or odd 
Description: Determine if a number is divisible by 2. 
Example: 
Input: 
7 
Output: 
Odd 
*/

function EvenOrOdd(number) {
  var evenOrNot;
  if (number === 0 || number === 1) return null;
  if (number % 2 === 0) evenOrNot = "Even";
  else evenOrNot = "Odd";

  return evenOrNot;
}

module.exports = EvenOrOdd;
