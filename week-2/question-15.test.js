const TriangleValidityAndType = require("./question-15");

test("Triangle validity and type ", () => {
  expect(TriangleValidityAndType(3, 4, 5)).toEqual([
    "Valid Triangle",
    "Scalene",
  ]);
});

test("Triangle validity and type ", () => {
  expect(TriangleValidityAndType(9, 7, 7)).toEqual([
    "Valid Triangle",
    "Isosceles",
  ]);
});

test("Triangle validity and type ", () => {
  expect(TriangleValidityAndType(6, 6, 6)).toEqual([
    "Valid Triangle",
    "Equilateral",
  ]);
});
