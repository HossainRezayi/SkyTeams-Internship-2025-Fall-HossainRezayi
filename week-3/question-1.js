/*
1. Count vowels in a string 
Description: Count the number of vowels (a, e, i, o, u) in a given string. 
Example: 
Input: 
"SkyTeams Internship" 
Output: 
6 
*/

function countVowel(str) {
  var count = 0;
  var vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  }
  return count;
}

module.exports = countVowel;
