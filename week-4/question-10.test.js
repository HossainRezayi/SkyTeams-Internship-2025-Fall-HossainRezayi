const isUniqueCharacters = require("./question-10");

test("Check Unique Characters ", () => {
  expect(isUniqueCharacters("hello")).not.toBe(true);
});

test("Check Unique Characters ", () => {
  expect(isUniqueCharacters("an")).toBe(true);
});

test("Check Unique Characters ", () => {
  expect(isUniqueCharacters("orange")).toBe(true);
});

test("Check Unique Characters ", () => {
  expect(isUniqueCharacters("apple")).toBe(false);
});

test("Check Unique Characters ", () => {
  expect(isUniqueCharacters("Ali")).toBe(true);
});

test("Check Unique Characters ", () => {
  expect(isUniqueCharacters("Ahmad")).toBe(false);
});
