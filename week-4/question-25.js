/*
25. Set Matrix Zeroes 
If an element is zero, set its entire row and column to zero. 
Follow-up: solve in constant extra space using the matrix itself as markers. 
*/

function matrixZeroes(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let zerosRow = new Set();
  let zerosCols = new Set();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zerosRow.add(i);
        zerosCols.add(j);
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (zerosRow.has(i) || zerosCols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

module.exports = matrixZeroes;
