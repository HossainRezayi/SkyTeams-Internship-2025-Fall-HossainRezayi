/*
10. Check whether a number is prime 
Description: Determine if a number is divisible only by 1 and itself. 
Example: 
Input: 
17 
Output: 
Prime 
Input: 
20 
Output: 
Not Prime 
*/
function PrimeNumber(number) {
  var result = "Prime";
  for (let index = 2; index < number; index++) {
    if (number % index === 0) result = "Not Prime";
  }
  return result;
}

module.exports = PrimeNumber;
