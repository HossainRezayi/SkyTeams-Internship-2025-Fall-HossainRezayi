/*
. Find the largest and smallest of three numbers 
Description: Read three integers and print the largest and smallest. 
Example: 
Input: 
3, 9, 5 
Output: 
Largest: 9, Smallest: 3 
*/

function largestAndSmallest(numbers) {
  var smallest = numbers[0];
  var largest = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > largest) largest = numbers[index];
    if (numbers[index] < smallest) smallest = numbers[index];
  }
  return [largest, smallest];
}

module.exports = largestAndSmallest;
