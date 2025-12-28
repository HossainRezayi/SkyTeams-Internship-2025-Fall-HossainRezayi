const PrintEvenNumbers = require("./question-22");

test("Print even numbers in a range ", () => {
  expect(PrintEvenNumbers(1, 10)).toEqual("2, 4, 6, 8, 10");
});

test("Print even numbers in a range ", () => {
  expect(PrintEvenNumbers(10, 20)).toEqual("10, 12, 14, 16, 18, 20");
});

test("Print even numbers in a range ", () => {
  expect(PrintEvenNumbers(13, 25)).toEqual("14, 16, 18, 20, 22, 24");
});

test("Print even numbers in a range ", () => {
  expect(PrintEvenNumbers(45, 53)).toEqual("46, 48, 50, 52");
});
