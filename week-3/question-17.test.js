const rightAngledTriangle = require("./question-17");

describe("Right-Angled Triangle Pattern", () => {
  test("prints triangle of size 4", () => {
    expect(rightAngledTriangle(4)).toBe(`*
**
***
****`);
  });

  test("prints triangle of size 1", () => {
    expect(rightAngledTriangle(1)).toBe(`*`);
  });

  test("returns empty string for invalid input", () => {
    expect(rightAngledTriangle(0)).toBe("");
    expect(rightAngledTriangle(-5)).toBe("");
  });
});
