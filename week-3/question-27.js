/*
27. Find Unique Elements in an Array 
Description: Return an array with only unique elements from the input array. 
Example: 
Input: 
[1, 2, 2, 3, 4, 4, 5] 
Output: 
[1, 2, 3, 4, 5]
*/

function uniqueElement(numbers) {
  let newNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    let isDuplicated = false;
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;
      if (numbers[i] === numbers[j]) isDuplicated = true;
    }
    !isDuplicated && newNumber.push(numbers[i]);
  }
  return newNumber;
}

module.exports = uniqueElement;
