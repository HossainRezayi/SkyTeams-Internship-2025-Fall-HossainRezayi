/*
11. Generate all prime numbers up to N 
Description: List all prime numbers up to a given limit using a loop. 
Example: 
Input: 
10 
Output: 
2, 3, 5, 7 
*/

function primeUpToN(number) {
  var primeNumbers = "2";
  for (let i = 3; i < number; i++) {
    var IsPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) IsPrime = false;
    }
    IsPrime ? (primeNumbers += ", " + i) : "";
  }
  return primeNumbers;
}

module.exports = primeUpToN;
