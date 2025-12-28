/*
13. Month name & number of days using switch-case 
Description: Input a month number (1–12) and display its name and number of days. 
Example: 
Input: 
2 
Output: 
February, 28 or 29 days 
*/

function MonthNameAndDays(month) {
  let monthInLower = month.toLowerCase();
  let name, days;

  switch (monthInLower) {
    case 1:
      name = "january";
      days = "31 Days";
      break;

    case 2:
      name = "february";
      days = "28 or 29 Days";
      break;

    case 3:
      name = "march";
      days = "31 Days";
      break;

    case 4:
      name = "april";
      days = "30 Days";
      break;

    case 5:
      name = "may";
      days = "31 Days";
      break;

    case 6:
      name = "june";
      days = "30 Days";
      break;

    case 7:
      name = "july";
      days = "31 Days";
      break;

    case 8:
      name = "august";
      days = "31 Days";
      break;

    case 9:
      name = "september";
      days = "30 Days";
      break;

    case 10:
      name = "october";
      days = "31 Days";
      break;

    case 11:
      name = "november";
      days = "30 Days";
      break;

    case 12:
      name = "december";
      days = "31 Days";
      break;
    default:
      name = "out Range";
      days = "-1";
  }

  return [name, days];
}

module.exports = MonthNameAndDays;
