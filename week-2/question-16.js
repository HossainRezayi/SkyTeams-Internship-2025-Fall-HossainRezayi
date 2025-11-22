/*
16. Print numbers from 1 to 100 
Description: Use a loop to print num\bers sequentially. 
Example: 
Output: 
1, 2, 3, …, 100 
*/

function Print(start, end) {
  var num = [100];
  for (let index = start; index <= end; index++) {
    num[index - 1] = index;
  }
  return num;
}

module.exports = Print;
