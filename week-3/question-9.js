/*
9. Write a function to count occurrences of an element in an array 
Description: Count how many times a given number appears in the array. 
Example: 
Input: 
Array = [2, 3, 2, 5, 2], Element = 2 
Output: 
3 
*/

function Occurrences(elements, element) {
  var count = 0;
  for (let index = 0; index < elements.length; index++) {
    if (elements[index] === element) count++;
  }
  return count;
}

module.exports = Occurrences;
