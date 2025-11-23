/*
1. Count vowels in a string 
Description: Count the number of vowels (a, e, i, o, u) in a given string. 
Example: 
Input: 
"SkyTeams Internship" 
Output: 
6 
*/

function CountVowel(str) {
  var count = 0;
  var vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) count++;
    }
  }
  return count;
}

module.exports = CountVowel;
