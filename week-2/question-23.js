/*
23. Fibonacci series up to N terms 
Description: Generate the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8…) up to N terms. 
Example: 
Input: 
7 
Output: 
0, 1, 1, 2, 3, 5, 8 
*/

function FibonacciSerie(number) {
  var series = [number];
  series[0] = 0;
  series[1] = 1;

  for (let index = 2; index < number; index++) {
    series[index] = series[index - 1] + series[index - 2];
  }

  return series;
}

module.exports = FibonacciSerie;
