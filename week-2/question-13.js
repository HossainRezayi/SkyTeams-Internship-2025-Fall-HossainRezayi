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
  var name, days;

  switch (month) {
    case 1:
      name = "JANUARY";
      days = "31 Days";
      break;

    case 2:
      name = "FEBRUARY";
      days = "28 or 29 Days";
      break;

    case 3:
      name = "MARCH";
      days = "31 Days";
      break;

    case 4:
      name = "APRIL";
      days = "30 Days";
      break;

    case 5:
      name = "MAY";
      days = "31 Days";
      break;

    case 6:
      name = "JUNE";
      days = "30 Days";
      break;

    case 7:
      name = "JULY";
      days = "31 Days";
      break;

    case 8:
      name = "AUGUST";
      days = "31 Days";
      break;

    case 9:
      name = "SEPTEMBER";
      days = "30 Days";
      break;

    case 10:
      name = "OCTOBER";
      days = "31 Days";
      break;

    case 11:
      name = "NOVEMBER";
      days = "30 Days";
      break;

    case 12:
      name = "DECEMBER";
      days = "31 Days";
      break;
    default:
      name = "Out Range";
      days = "-1";
  }

  return [name, days];
}

module.exports = MonthNameAndDays;
