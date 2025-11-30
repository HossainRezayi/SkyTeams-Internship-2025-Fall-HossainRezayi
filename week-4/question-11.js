/*
11. String Rotation Check 
Description: Check if one string is rotation of another. 
Example: 
"waterbottle", "erbottlewat" → True 
*/

function isRotation(str1, str2) {
  let result = true;
  let i = 0;
  let j = str2.length - 1;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  while (i < str1.length && j < 0) {
    if (str1[i] !== str2[j]) result = false;
    i++;
    j--;
  }

  return result;
}

module.exports = isRotation;
