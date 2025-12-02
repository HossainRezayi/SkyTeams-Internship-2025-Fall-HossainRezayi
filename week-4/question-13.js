/*
13. String Pattern Matching ("abba") 
Description: Check if sentence follows the pattern. 
Example: "dog cat cat dog" → True
*/

function isPatternMatching(str) {
  let words = [];

  for (let i = 0; i < 4; i++) {
    words[i] = str.split(" ")[i];
  }
  return words[0] === words[3] && words[1] === words[2];
}

module.exports = isPatternMatching;
