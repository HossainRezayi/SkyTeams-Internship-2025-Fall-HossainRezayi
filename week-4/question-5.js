/*
5. Rearrange Array (Even Before Odd) 
Description: Move even numbers before odd numbers while maintaining order. 
Example: 
Input: [1, 2, 3, 4, 5, 6] 
Output: [2, 4, 6, 1, 3, 5] 
*/

function rearrangeArray(numbers) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) newArray.push(numbers[i]);
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) newArray.push(numbers[i]);
  }
  return newArray;
}

module.exports = rearrangeArray;
