/*
9. String Compression 
Description: Compress using counts of consecutive characters. 
Example: 
"aabcccccaaa" → "a2b1c5a3" 
*/

function compressionString(str) {
  let result = "";
  for (let i = 0; i < str.length - 1; i++) {
    let count = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
        i++;
      } else break;
    }
    result += `${str[i] + count}`;
  }
  return result;
}

module.exports = compressionString;
