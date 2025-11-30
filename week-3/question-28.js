/*
28. Remove Duplicates from an Array 
Description: Remove duplicate elements efficiently from an array. 
Example: 
Input: 
[3, 1, 3, 5, 1] 
Output: 
[3, 1, 5] 
*/

function removeDuplicates(numbers) {
  let newNumber = [];

  for (let i = 0; i < numbers.length; i++) {
    let isDuplicated = false;
    if (i === numbers.length) break;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) isDuplicated = true;
    }
    !isDuplicated && newNumber.push(numbers[i]);
  }

  return newNumber;
}

module.exports = removeDuplicates;
