/*
12. Character Frequency Counter 
Description: Count occurrences of characters. 
Input: "banana" → {b:1, a:3, n:2} 
*/

function frequencyCounter(str) {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}

module.exports = frequencyCounter;
