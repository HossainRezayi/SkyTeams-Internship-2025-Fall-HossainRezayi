/*
18. Multiplication table of a number 
Description: Print the multiplication table for a given number (up to 10 or N). 
Example: 
Input: 
5 
Output: 
5 × 1 = 5 
5 × 2 = 10 
… 
5 × 10 = 50
*/

function MultiplicationTable(number, N) {
  var multiplying = [N];
  for (let index = 0; index < N; index++) {
    multiplying[index] = (index + 1) * number;
  }
  return multiplying;
}

module.exports = MultiplicationTable;
