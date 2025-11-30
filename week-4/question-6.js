/*
6. Binary Search Algorithm 
Description: Implement binary search in a sorted array. 
Example: 
Input: [1, 3, 5, 7, 9], Target = 7 
Output: Found at index 3 
*/

function binarySearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

module.exports = binarySearch;
