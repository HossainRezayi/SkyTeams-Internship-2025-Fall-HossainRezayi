/*
14. Find factorial of a number 
Description: Compute N! using iterative approach. 
Example: 
Input: 
5 
Output: 
120 
*/

function FindFactorial(number) {
  var factorial = 1;
  for (let index = 1; index <= number; index++) {
    factorial *= index;
  }
  return factorial;
}

module.exports = FindFactorial;
