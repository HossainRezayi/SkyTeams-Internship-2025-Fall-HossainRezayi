/*
6. Write a function to find the smallest element in an array 
Description: Find and return the smallest number in an array. 
Example: 
Input: 
[4, 7, 1, 9, 2] 
Output: 
1
*/

function smallestElement(numbers) {
  var smallest = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
    if (smallest > numbers[index]) smallest = numbers[index];
  }

  return smallest;
}

module.exports = smallestElement;
