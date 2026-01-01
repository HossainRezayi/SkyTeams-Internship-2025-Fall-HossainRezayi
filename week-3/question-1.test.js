const countVowel = require("./question-1");

test("Count vowels in a string ", () => {
  expect(countVowel("SkyTeams Internship")).toBe(5);
});

test("Count vowels in a string ", () => {
  expect(countVowel("GitHub")).toBe(2);
});

test("Count vowels in a string ", () => {
  expect(countVowel("HossainRezayi")).toBe(6);
});

test("Count vowels in a string ", () => {
  expect(countVowel("Count vowels in a string ")).toBe(7);
});

test("Count vowels in a string ", () => {
  expect(countVowel("test")).toBe(1);
});

test("Count vowels in a string ", () => {
  expect(countVowel("A cat sat on a mat")).toBe(6);
});
