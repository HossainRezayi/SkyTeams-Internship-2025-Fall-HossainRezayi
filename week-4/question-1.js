/*
1. Find Second Largest Number in an Array 
Description: Find the second largest number without sorting the array. 
Example: 
Input: [10, 20, 4, 45, 99] 
Output: 45 
*/

function secondLargestNumber(numbers) {
  // FIND THE LARGEST NUMBER
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) largest = numbers[i];
  }

  //   FIND THE SECOND LARGEST NUMBER BASE ON LARGEST NUMBER
  let secondLargest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > secondLargest && numbers[i] < largest)
      secondLargest = numbers[i];
  }
  return secondLargest;
}

module.exports = secondLargestNumber;
