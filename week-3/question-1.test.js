const CountVowel = require("./question-1");

test("Count vowels in a string ", () => {
  expect(CountVowel("SkyTeams Internship")).toBe(5);
});

test("Count vowels in a string ", () => {
  expect(CountVowel("GitHub")).toBe(2);
});

test("Count vowels in a string ", () => {
  expect(CountVowel("HossainRezayi")).toBe(6);
});

test("Count vowels in a string ", () => {
  expect(CountVowel("Count vowels in a string ")).toBe(7);
});

test("Count vowels in a string ", () => {
  expect(CountVowel("test")).toBe(1);
});

test("Count vowels in a string ", () => {
  expect(CountVowel("A cat sat on a mat")).toBe(6);
});
