const pascalTriangle = require("./question-24");

test("Generate Pascal’s Triangle ", () => {
  expect(pascalTriangle(5)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ]);
});
