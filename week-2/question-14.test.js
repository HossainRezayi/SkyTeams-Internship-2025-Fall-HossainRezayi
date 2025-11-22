const CheckCharacter = require("./question-14");

test("Check character type ", () => {
  expect(CheckCharacter("a")).toBe("Vowel");
});

test("Check character type ", () => {
  expect(CheckCharacter("1")).toBe("Digit");
});

test("Check character type ", () => {
  expect(CheckCharacter("w")).toBe("Consonant");
});

test("Check character type ", () => {
  expect(CheckCharacter("!")).toBe("Special Symbol");
});
