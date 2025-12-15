/*
24. Generate Pascal’s Triangle 
Description: Implement pascalTriangle(rows), which prints Pascal’s Triangle up to n rows. 
Example: 
Input: 
5 
Output: 
1 
1 1 
1 2 1 
1 3 3 1 
1 4 6 4 1 
*/

function pascalTriangle(num) {
  let pascal = [];

  for (let i = 0; i < num; i++) {
    pascal[i] = [];
    pascal[i][0] = 1;
    
    for (let j = 1; j < i + 1; j++) {
      pascal[i][j] =
        pascal[i - 1][j - 1] + (pascal[i - 1][j] ? pascal[i - 1][j] : 0);
    }
  }
  return pascal;
}

module.exports = pascalTriangle;
