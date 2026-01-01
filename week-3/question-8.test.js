const arrayContainsElement = require("./question-8");

test("Write a function to check if an array contains a specific element ", () => {
  expect(arrayContainsElement([3, 6, 9, 12], 6)).toBe("Found");
});

test("Write a function to check if an array contains a specific element ", () => {
  expect(arrayContainsElement([1, 2, 3, 5, 6, 7, 8, 9], 4)).not.toBe("Found");
});

test("Write a function to check if an array contains a specific element ", () => {
  expect(arrayContainsElement([1, 11, 24, 5, 16, 71, 89], 50)).toBe(
    "Not Found"
  );
});

test("Write a function to check if an array contains a specific element ", () => {
  expect(arrayContainsElement("SkyTeams Internship", "I")).toBe("Found");
});

test("Write a function to check if an array contains a specific element ", () => {
  expect(arrayContainsElement("The Dark Knight", "Dart")).toBe("Not Found");
});
