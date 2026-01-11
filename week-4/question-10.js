/*
10. Check Unique Characters 
Description: Return whether a string contains only unique chars. 
Example: 
"hello" → Not Unique
*/

function isUniqueCharacters(str) {
  str = str.toLowerCase();
  let result = true;
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) result = false;
    }
  }
  return result;
}

module.exports = isUniqueCharacters;
