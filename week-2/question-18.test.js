const MultiplicationTable = require("./question-18");

/*
I could format it exactly as “5 × 1 = 5,” but I chose to print only the result.
I felt that understanding the underlying logic was more important,
and including the full expression would make the code less readable and less automated.
*/
test("Multiplication table of 3 returns formatted strings up to 5", () => {
  const number = 3;
  const N = 5;
  const expected = [
    "3 × 1 = 3",
    "3 × 2 = 6",
    "3 × 3 = 9",
    "3 × 4 = 12",
    "3 × 5 = 15",
  ];
  expect(MultiplicationTable(number, N)).toEqual(expected);
});

test("Multiplication table of 7 returns formatted strings up to 3", () => {
  const number = 7;
  const N = 3;
  const expected = ["7 × 1 = 7", "7 × 2 = 14", "7 × 3 = 21"];
  expect(MultiplicationTable(number, N)).toEqual(expected);
});
