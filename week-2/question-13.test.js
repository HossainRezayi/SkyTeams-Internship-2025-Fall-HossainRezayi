const MonthNameAndDays = require("./question-13");

test("Month name & number of days using switch-case ", () => {
  expect(MonthNameAndDays(2)).toEqual(["FEBRUARY", "28 or 29 Days"]);
});

test("Month name & number of days using switch-case ", () => {
  expect(MonthNameAndDays(8)).toEqual(["AUGUST", "31 Days"]);
});

test("Month name & number of days using switch-case ", () => {
  expect(MonthNameAndDays(13)).toEqual(["Out Range", "-1"]);
});
