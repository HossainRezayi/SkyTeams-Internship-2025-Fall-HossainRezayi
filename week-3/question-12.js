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
  var firstDigit = Math.floor(number / 100);
  var lastDigit = number % 10;
  return lastDigit === firstDigit ? "Palindrome" : "Not Palindrome";
}

module.exports = palindrome;
