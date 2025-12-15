/*
29. Check if Two Arrays Are Equal 
Description: Compare two arrays and determine if they contain the same elements in the same 
order. 
Example: 
Input: 
[1, 2, 3], [1, 2, 3] 
Output: 
Equal 
*/

function equalArray(array1, array2) {
  let result = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) result = false;
    }
  } else result = false;

  return result;
}

module.exports = equalArray;
