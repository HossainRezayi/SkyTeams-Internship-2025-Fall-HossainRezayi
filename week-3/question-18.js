/*
18. Pattern Printing – Right-aligned Triangle 
Example: 
Input: 
4 
Output: 
   *
  **
 ***
****

*/

function rightAlignedTriangle(n) {
  if (n < 1) return "";

  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      result += " ";
    }

    for (let j = 0; j < i; j++) {
      result += "*";
    }

    if (i < n) result += "\n"; // Avoid trailing newline
  }
  return result;
}

module.exports = rightAlignedTriangle;
