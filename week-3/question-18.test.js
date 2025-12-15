const rightAlignedTriangle = require("./question-18");

test("Pattern Printing – Right-aligned Triangle ", () => {
  expect(rightAlignedTriangle(4)).toBe(
    `   *
  **
 ***
****`
  );
});

test("Pattern Printing – Right-aligned Triangle ", () => {
  expect(rightAlignedTriangle(1)).toBe("*");
});

test("Pattern Printing – Right-aligned Triangle ", () => {
  expect(rightAlignedTriangle(-7)).toBe("");
});

test("Pattern Printing – Right-aligned Triangle ", () => {
  expect(rightAlignedTriangle(2)).toBe(` *
**`);
});

test("Pattern Printing – Right-aligned Triangle ", () => {
  expect(rightAlignedTriangle(0)).toBe("");
});
