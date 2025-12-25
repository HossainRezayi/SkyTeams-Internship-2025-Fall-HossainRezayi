const abbreviation = require("./question-17");

test("Convert sentence into first-letter abbreviation.", () => {
  expect(abbreviation("I am learning JavaScript")).toBe("I a l J");
});

test("Convert sentence into first-letter abbreviation.", () => {
  expect(abbreviation("I completed 17 question from week 4")).toBe(
    "I c 1 q f w 4"
  );
});

test("Convert sentence into first-letter abbreviation.", () => {
  expect(abbreviation("Yet I have 8 other questions")).toBe("Y I h 8 o q");
});

test("Convert sentence into first-letter abbreviation.", () => {
  expect(abbreviation("and I couldn't do question 15")).toBe("a I c d q 1");
});
