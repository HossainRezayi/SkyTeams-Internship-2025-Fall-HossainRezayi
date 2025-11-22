/*
9. Grade Calculator (0–100 → A–F) 
Description: Input a student’s marks (0–100) and print the grade based on a scale. 
Example: 
Input: 
85 
Output: 
B
*/

function GradeCalculator(mark) {
  var scale;
  if (mark >= 90 && mark <= 100) scale = "A";
  else if (mark >= 80 && mark < 90) scale = "B";
  else if (mark >= 70 && mark < 80) scale = "C";
  else if (mark >= 60 && mark < 70) scale = "D";
  else if (mark >= 0 && mark < 60) scale = "F";
  else scale = "Out Range";

  return scale;
}

module.exports = GradeCalculator;
