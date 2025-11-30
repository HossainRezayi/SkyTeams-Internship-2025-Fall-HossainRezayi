/*
5. Write a function to find the largest element in an array 
Description: Given an array of numbers, return the largest value. 
Example: 
Input: 
[2, 8, 5, 3, 9] 
Output: 
9
*/

function largestElement(numbers) {
  var largest = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
    if (largest < numbers[index]) largest = numbers[index];
  }

  return largest;
}

module.exports = largestElement;
