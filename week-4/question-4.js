/*
4. Intersection of Two Arrays 
Description: Return elements present in both arrays. 
Example: 
Input: [1, 2, 3, 4], [3, 4, 5, 6] 
Output: [3, 4] 
*/

function intersection(array1, array2) {
  return array1
    .map((item) => (array2.includes(item) ? item : null))
    .filter((item) => item !== null);
}

module.exports = intersection;
