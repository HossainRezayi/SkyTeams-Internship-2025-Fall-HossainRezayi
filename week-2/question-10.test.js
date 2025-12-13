const LeapYear = require("./question-10");

test("Determine if a given year is a leap year", () => {
  expect(LeapYear(2000)).toBe("Leap year");
});

test("Determine if a given year is a leap year", () => {
  expect(LeapYear(1900)).toBe("Not leap year");
});

test("Determine if a given year is a leap year", () => {
  expect(LeapYear(396)).toBe("Leap year");
});

test("Determine if a given year is a leap year", () => {
  expect(LeapYear(100)).toBe("Not leap year");
});
