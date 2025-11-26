const Pyramid = require("./question-19");

test("Pattern Printing – Pyramid", () => {
  expect(Pyramid(5)).toBe(
    `    *
   ***
  *****
 *******
*********`
  );
});

test("Pattern Printing – Pyramid", () => {
  expect(Pyramid(2)).toBe(
    ` *
***`
  );
});

test("Pattern Printing – Pyramid", () => {
  expect(Pyramid(0)).toBe("");
});

test("Pattern Printing – Pyramid", () => {
  expect(Pyramid(-3)).toBe("");
});
