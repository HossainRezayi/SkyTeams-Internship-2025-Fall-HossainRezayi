/*
15. Triangle validity and type 
Description: Given three sides, determine if they form a valid triangle and if it’s equilateral, 
isosceles, or scalene. 
Rule: Sum of any two sides > third side. 
Example: 
Input: 
3, 4, 5 
Output: 
Valid triangle, Scalene 
*/

function TriangleValidityAndType(side1, side2, side3) {
  var validity, type;
  if (side1 + side2 > side3 && side3 + side2 > side1 && side1 + side3 > side2)
    validity = "Valid Triangle";
  else validity = "Not Valid Triangle";

  if (side1 === side2 && side1 === side3 && side2 === side3)
    type = "Equilateral";
  else if (side1 === side2 || side1 === side3 || side2 === side3)
    type = "Isosceles";
  else type = "Scalene";

  return [validity, type];
}

module.exports = TriangleValidityAndType;
