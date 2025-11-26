/*
23. Calculate Factorial Using Recursion 
Description: Implement factorial(n), which calculates the factorial of n using recursion. 
Example: 
Input: 
5 
Output: 
120 
*/

function FactorialWithRecursion(num, sum = 1) {
  if (num === 0) return 1;

  sum *= num;
  num--;

  if (num > 0) {
    return FactorialWithRecursion(num, sum);
  }

  return sum;
}

module.exports = FactorialWithRecursion;
