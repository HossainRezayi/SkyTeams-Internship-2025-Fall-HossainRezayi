/*
16. Matrix Multiplication 
Description: Multiply matrix A × B manually. 
Example: 
[[1,2],[3,4]] × [[5,6],[7,8]] → [[19,22],[43,50]] 
*/

//  THIS SOLUTION WORKS FOR 2 BY 2 MATRIX
/*
function multiplicationMatrix(array1, array2) {
  let multiply = [];
  let n = 1;
  for (let i = 0; i < array1.length - 1; i++) {
    for (let j = 0; j < array2[0].length; j++) {
      multiply.push([]);
      for (let k = 0; k < array1[0].length; k++) {
        multiply[j][k] =
          array1[j][i] * array2[i][k] + array1[j][n] * array2[n][k];
      }
    }
  }
  return multiply;
}
*/

function multiplicationMatrix(matrix1, matrix2) {
  let multiply = [];
  for (let i = 0; i < matrix1.length; i++) {
    multiply.push([]);
    for (let j = 0; j < matrix2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrix1[0].length; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      multiply[i][j] = sum;
    }
  }
  return multiply;
}

module.exports = multiplicationMatrix;
