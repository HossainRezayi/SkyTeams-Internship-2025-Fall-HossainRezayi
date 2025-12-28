/*
12. Traffic Light System using switch-case 
Description: Input a color (Red, Yellow, Green) and display an action (Stop, Ready, Go). 
Example: 
Input: 
Green 
Output: 
Go 
*/

function TrafficLight(color) {
  let colorInlowercase = color.toLowerCase();
  var action;
  switch (colorInlowercase) {
    case "red":
      action = "Stop";
      break;
    case "yellow":
      action = "Ready";
      break;
    case "green":
      action = "Go";
      break;
  }
  return action;
}

module.exports = TrafficLight;
