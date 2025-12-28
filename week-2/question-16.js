/*
16. Print numbers from 1 to 100 
Description: Use a loop to print num\bers sequentially. 
Example: 
Output: 
1, 2, 3, …, 100 
*/

function Print(start, end) {
  const length = end - start + 1;
  var num = new Array(length);
  for (let index = 0; index < length; index++) {
    num[index] = start + index;
  }
  return num;
}

module.exports = Print;
