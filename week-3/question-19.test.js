const pyramid = require("./question-19");

test("Pattern Printing – Pyramid", () => {
  expect(pyramid(5)).toBe(
    `    *
   ***
  *****
 *******
*********`
  );
});

test("Pattern Printing – Pyramid", () => {
  expect(pyramid(2)).toBe(
    ` *
***`
  );
});

test("Pattern Printing – Pyramid", () => {
  expect(pyramid(0)).toBe("");
});

test("Pattern Printing – Pyramid", () => {
  expect(pyramid(-3)).toBe("");
});
