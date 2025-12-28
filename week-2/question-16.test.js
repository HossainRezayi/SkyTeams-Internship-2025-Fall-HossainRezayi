const Print = require("./question-16");

test("Print numbers from 1 to 100 ", () => {
  expect(Print(1, 100)).toEqual(Array.from({ length: 100 }, (_, i) => i + 1));
});
