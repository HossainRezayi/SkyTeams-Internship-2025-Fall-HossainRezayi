/*
6. Binary Search Algorithm 
Description: Implement binary search in a sorted array. 
Example: 
Input: [1, 3, 5, 7, 9], Target = 7 
Output: Found at index 3 
*/

// ([1, 2, 3, 4], 1)
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let middle;

  while (start < end) {
    middle =
      target > array[middle]
        ? Math.ceil((start + end) / 2)
        : Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      start = middle;
    } else if (array[middle] > target) {
      end = middle;
    }
  }

  return -1;
}

module.exports = binarySearch;
