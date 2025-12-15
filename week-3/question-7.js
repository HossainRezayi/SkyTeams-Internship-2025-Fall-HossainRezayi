/*
7. Write a function to find the sum of all elements in an array 
Description: Calculate the total sum of all array elements. 
Example: 
Input: 
[1, 2, 3, 4, 5] 
Output: 
15
*/

function sumOfElement(numbers) {
  var sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  return sum;
}

module.exports = sumOfElement;
