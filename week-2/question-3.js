/*
3. Calculate the area and perimeter of a rectangle 
Description: Given length and width, calculate and display both area and perimeter. 
Example: 
Input: 
length = 4, width = 6 
Output: 
Area: 24, Perimeter: 20 
*/

function AreaAndPreimeter(length, width) {
  var area = length * width;
  var perimeter = 2 * (length + width);

  return [area, perimeter];
}

module.exports = AreaAndPreimeter;
