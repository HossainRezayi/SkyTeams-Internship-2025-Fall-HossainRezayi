/*
17. Pattern Printing – Right-angled Triangle 
Example: 
Input: 
4 
Output: 
*   
**   
***   
****

*/

function rightAngledTriangle(n) {
  if (n < 1) return "";

  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    if (i < n) result += "\n"; // Avoid trailing newline
  }
  return result;
}

module.exports = rightAngledTriangle;
