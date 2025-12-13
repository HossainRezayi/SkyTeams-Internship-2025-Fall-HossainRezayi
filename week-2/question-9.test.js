const GradeCalculator = require("./qustion-9");

test("Grade Calculator (0–100 → A–F) ", () => {
  expect(GradeCalculator(90)).toBe("A");
});

test("Grade Calculator (0–100 → A–F) ", () => {
  expect(GradeCalculator(85)).toBe("B");
});

test("Grade Calculator (0–100 → A–F) ", () => {
  expect(GradeCalculator(79)).toBe("C");
});

test("Grade Calculator (0–100 → A–F) ", () => {
  expect(GradeCalculator(68)).toBe("D");
});

test("Grade Calculator (0–100 → A–F) ", () => {
  expect(GradeCalculator(44)).toBe("F");
});

test("Grade Calculator (0–100 → A–F) ", () => {
  expect(GradeCalculator(120)).toBe("Out Range");
});
