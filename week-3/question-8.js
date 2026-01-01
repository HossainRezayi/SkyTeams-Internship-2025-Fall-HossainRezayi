/*
8. Write a function to check if an array contains a specific element 
Description: Determine if a given element exists in the array. 
Example: 
Input: 
Array = [3, 6, 9, 12], Element = 6 
Output: 
Found 
*/

function arrayContainsElement(elements, element) {
  var result = "Not Found";
  for (let index = 0; index < elements.length; index++) {
    if (elements[index] === element) result = "Found";
  }
  return result;
}

module.exports = arrayContainsElement;
