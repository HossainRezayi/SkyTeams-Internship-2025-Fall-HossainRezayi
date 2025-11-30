/*
4. Intersection of Two Arrays 
Description: Return elements present in both arrays. 
Example: 
Input: [1, 2, 3, 4], [3, 4, 5, 6] 
Output: [3, 4] 
*/

function intersection(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) newArray.push(array1[i]);
    }
  }
  return newArray;
}

module.exports = intersection;
