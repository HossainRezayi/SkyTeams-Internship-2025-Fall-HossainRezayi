/*
6. Convert total seconds into hours, minutes, and seconds 
Description: Convert a given number of seconds into hours, minutes, and seconds format. 
Example: 
Input: 
3665 
Output: 
1 hr, 1 min, 5 sec 
*/
function ConvertSecsIntoHoursAndMins(seconds) {
  const hour = Math.floor(seconds / 3600);
  seconds %= 360;
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  return [hour, min, sec];
}

module.exports = ConvertSecsIntoHoursAndMins;
