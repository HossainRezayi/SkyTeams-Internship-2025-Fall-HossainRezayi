/*
1. Swap two variables without using a temporary variable 
Description: Write a program to swap the values of two variables (e.g., a and b) without using a 
third variable. 
Example: 
Input: 
a = 5, b = 10 
Output: 
a = 10, b = 5 
*/

function swappingTwoVariables(var1, var2) {
  var1 += var2;
  var2 = var1 - var2;
  var1 -= var2;

  return [var1, var2];
}

module.exports = swappingTwoVariables;
