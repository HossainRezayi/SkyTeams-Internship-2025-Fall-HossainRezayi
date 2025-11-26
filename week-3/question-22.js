/*
22. Collatz Sequence (Hailstone Numbers) 
Description: 
Take a number n. 
• If n is even, divide it by 2. 
• If n is odd, multiply it by 3 and add 1. 
• Repeat until n = 1. 
• Count the number of steps to reach 1. 
Example: 
Input: 
6 
Output: 
6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8) 
*/

function CollatzSequence(n) {
  let count = 0;
  while (n !== 1) {
    count++;
    n % 2 === 0 ? (n /= 2) : (n = n * 3 + 1);
  }

  return count;
}

module.exports = CollatzSequence;
