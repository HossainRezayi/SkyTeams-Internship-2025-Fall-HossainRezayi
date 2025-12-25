/*
2. Merge Two Sorted Arrays 
Description: Merge two sorted arrays into a single sorted array. 
Example: 
Input: [1, 3, 5], [2, 4, 6] 
Output: [1, 2, 3, 4, 5, 6] 
*/

function mergeArray(array1, array2) {
  let i = 0;
  let j = 0;
  let newArray = [];

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      newArray.push(array1[i]);
      i++;
    } else {
      newArray.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    newArray.push(array1[i]);
    i++;
  }

  while (j < array1.length) {
    newArray.push(array2[j]);
    j++;
  }

  return newArray;
}
module.exports = mergeArray;
