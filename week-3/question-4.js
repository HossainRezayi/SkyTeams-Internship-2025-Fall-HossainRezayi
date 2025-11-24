/*
4. Display all factors of a number 
Description: Print all numbers that divide the given number exactly. 
Example: 
Input: 
12 
Output: 
1, 2, 3, 4, 6, 12 
*/

function Factors(number) {
  var factor = "";
  for (let index = 0; index <= number; index++) {
    if (number % index === 0) {
      factor += index === number ? `${index}` : `${index}, `;
    }
  }
  return factor;
}

module.exports = Factors;
