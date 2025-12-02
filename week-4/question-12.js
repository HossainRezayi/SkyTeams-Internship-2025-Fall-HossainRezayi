/*
12. Character Frequency Counter 
Description: Count occurrences of characters. 
Input: "banana" → {b:1, a:3, n:2} 
*/

function frequencyCounter(str) {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    if (str[i] in frequency) continue;

    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }
    frequency[`${str[i]}`] = count;
  }
  return frequency;
}

module.exports = frequencyCounter;
