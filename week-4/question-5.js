/*
5. Rearrange Array (Even Before Odd) 
Description: Move even numbers before odd numbers while maintaining order. 
Example: 
Input: [1, 2, 3, 4, 5, 6] 
Output: [2, 4, 6, 1, 3, 5] 
*/

function rearrangeArray(numbers) {
  let index = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers[index] = numbers[i];
      index++;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      numbers[index] = numbers[i];
      index++;
    }
  }

  return numbers;
}

module.exports = rearrangeArray;
