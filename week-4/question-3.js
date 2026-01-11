/*
3. Rotate Array K Times to the Right 
Description: Rotate elements of an array K times to the right. 
Example: 
Input: [1, 2, 3, 4, 5], K = 2 
Output: [4, 5, 1, 2, 3] 
*/

function rotateToRight(numbers, k) {
  let newArray = [];

  for (let i = k; i > 0; i--) {
    newArray.push(numbers[numbers.length - i]);
  }

  for (let i = 0; i < numbers.length - k; i++) {
    newArray.push(numbers[i]);
  }
  return newArray;
}

module.exports = rotateToRight;
