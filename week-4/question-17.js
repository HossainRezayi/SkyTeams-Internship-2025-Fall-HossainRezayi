/*
17. Sentence Abbreviation 
Description: Convert sentence into first-letter abbreviation. 
Example: "I am learning JavaScript" → "I a l J" 
*/

function abbreviation(str) {
  let firstLetter = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") firstLetter += " " + str[i + 1];
  }
  return firstLetter;
}

module.exports = abbreviation;
