const EvenOrOdd = require("./question-7");

test("Check whether a number is even or odd ", () => {
  expect(EvenOrOdd(7)).toEqual("Odd");
});

test("Check whether a number is even or odd ", () => {
  expect(EvenOrOdd(7)).not.toEqual("Even");
});

test("Check whether a number is even or odd ", () => {
  expect(EvenOrOdd(2)).not.toEqual("Even");
});

// Zero and One are not even nor odd so function will return null as output
test("Check whether a number is even or odd ", () => {
  expect(EvenOrOdd(1)).toEqual("Even");
});
