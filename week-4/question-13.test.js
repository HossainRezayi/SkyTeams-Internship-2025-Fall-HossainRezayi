const isPatternMatching = require("./question-13");

test("String Pattern Matching ('abba') ", () => {
  expect(isPatternMatching("dog cat cat dog")).toBe(true);
});

test("String Pattern Matching ('abba') — false case", () => {
  expect(isPatternMatching("dog cat cat fish")).toBe(false);
});

test("String Pattern Matching ('abba') — repeated word mismatch", () => {
  expect(isPatternMatching("fish pet fish pet")).toBe(true);
});

test("String Pattern Matching ('abba') — multi-character words", () => {
  expect(isPatternMatching("red blue blue red")).toBe(true);
});
