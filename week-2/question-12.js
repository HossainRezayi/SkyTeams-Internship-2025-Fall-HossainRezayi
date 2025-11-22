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
  var action;
  switch (color) {
    case "Red":
      action = "Stop";
      break;
    case "Yellow":
      action = "Ready";
      break;
    case "Green":
      action = "Go";
      break;
  }
  return action;
}

module.exports = TrafficLight;
