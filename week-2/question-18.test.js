const MultiplicationTable = require("./question-18");

/*
I could format it exactly as “5 × 1 = 5,” but I chose to print only the result.
I felt that understanding the underlying logic was more important,
and including the full expression would make the code less readable and less automated.
*/

test("Multiplication table of a number ", () => {
  let number = 2,
    N = 10;
  expect(MultiplicationTable(number, N)).toEqual(
    Array.from({ length: N }, (_, i) => (i + 1) * number)
  );
});

test("Multiplication table of a number ", () => {
  let number = 5,
    N = 5;
  expect(MultiplicationTable(number, N)).toEqual(
    Array.from({ length: N }, (_, i) => (i + 1) * number)
  );
});
