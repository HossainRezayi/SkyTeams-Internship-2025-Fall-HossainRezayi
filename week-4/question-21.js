/*
21. Longest Palindromic Substring 
Input: "babad" → "bab" or "aba" 
*/

function longestPalindromicSubstring(str) {
  let longestPalindromic = "";

  for (let i = 0; i < str.length; i++) {
    let q1 = i - 1;
    let q3 = i + 1;

    while (q1 >= 0 && q3 < str.length && str[q1] === str[q3]) {
      q1--;
      q3++;
    }
    let palindromicOdd = str.slice(q1 + 1, q3);
    if (palindromicOdd.length > longestPalindromic.length)
      longestPalindromic = palindromicOdd;

    let left = i;
    let right = i + 1;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    let palindromicEven = str.slice(left + 1, right);
    if (palindromicEven.length > longestPalindromic.length)
      longestPalindromic = palindromicEven;
  }

  return longestPalindromic;
}

module.exports = longestPalindromicSubstring;
