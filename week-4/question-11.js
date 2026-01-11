/*
11. String Rotation Check 
Description: Check if one string is rotation of another. 
Example: 
"waterbottle", "erbottlewat" → True 
*/

function isRotation(str1, str2) {
  if (str1.length !== str2.length) return false;

  let n = str1.length;

  for (let i = 0; i < n; i++) {
    let result = true;
    for (let j = 0; j < n; j++) {
      if (str1[(i + j) % n] !== str2[j]) {
        result = false;
        break;
      }
    }
    if (result) return true;
  }

  return false;
}

module.exports = isRotation;
