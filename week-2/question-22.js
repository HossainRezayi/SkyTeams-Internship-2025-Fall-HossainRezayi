/*
22. Print even numbers in a range 
Description: Input start and end values, print all even numbers between them. 
Example: 
Input: 
1, 10 
Output: 
2, 4, 6, 8, 10 
*/

function PrintEvenNumbers(start, end) {
  var result = "";

  while (end >= start) {
    if (start % 2 === 0) result += start + (start > end - 2 ? "" : ", ");
    start++;
  }

  return result;
}

module.exports = PrintEvenNumbers;
