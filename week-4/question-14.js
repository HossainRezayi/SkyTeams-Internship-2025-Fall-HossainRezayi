/*
14. All Permutations of a String 
Description: Generate all permutations. 
Input: "abc" → abc, acb, bac, ... 
*/

function changePosition(str, i, count) {
  let result = "";
  if (count === 0) {
    for (let j = 0; j < str.length; j++) {
      if (i === j) continue;
      result += str[j];
    }
  } else {
    for (let j = str.length - 1; j >= 0; j--) {
      if (i === j) continue;
      result += str[j];
    }
  }
  return result;
}

function permutations(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length - 1; j++) {
      result +=
        str[i] +
        changePosition(str, i, count++) +
        (j === 1 && i === 2 ? "" : ",");
    }
  }
  return result;
}

module.exports = permutations;
