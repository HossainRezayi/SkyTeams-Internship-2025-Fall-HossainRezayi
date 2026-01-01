/*
30. Find Missing Number in Array (1 to N) 
Description: Given numbers from 1 to N with one missing, find the missing number. 
Example: 
Input: 
[1, 2, 4, 5] 
Output: 
3 
*/

function missingNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== i + 1) return i + 1;
  }
  return 0;
}

module.exports = missingNumber;
