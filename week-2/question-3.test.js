const AreaAndPreimeter = require("./question-3");

test("Finding the Area and Preimeter of the gaven rectangle", () => {
  expect(AreaAndPreimeter(4, 6)).toEqual([24, 20]);
});

test("Finding the Area and Preimeter of the gaven rectangle", () => {
  expect(AreaAndPreimeter(4, 6)).not.toEqual([10, 20]);
});

test("Finding the Area and Preimeter of the gaven rectangle", () => {
  expect(AreaAndPreimeter(4, 6)).not.toEqual([24, 10]);
});
