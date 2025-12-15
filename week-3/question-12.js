/*
12. Check for palindrome number 
Description: Check if a number reads the same backward and forward. 
Example: 
Input: 
121 
Output: 
Palindrome 
Input: 
123 
Output: 
Not Palindrome 
*/

function palindrome(number) {
  let original = number;
  let reversed = 0;

  while (number > 0) {
    reversed = reversed * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return reversed === original ? "Palindrome" : "Not Palindrome";
}

module.exports = palindrome;
