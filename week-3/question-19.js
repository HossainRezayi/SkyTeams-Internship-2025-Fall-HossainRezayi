/*
19. Pattern Printing – Pyramid 
Example: 
Input: 
5 
Output: 
    *
   ***
  *****
 *******
*********
*/

function Pyramid(n) {
  let result = "";
  let extraStar = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      result += " ";
    }

    for (let j = 0; j < i + extraStar; j++) {
      result += "*";
    }

    extraStar++;
    if (i < n) result += "\n";
  }

  return result;
}

module.exports = Pyramid;
