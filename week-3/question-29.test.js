const equalArray = require("./question-29");

test("Check if Two Arrays Are Equal ", () => {
  expect(equalArray([1, 2, 3], [1, 2, 3])).toBe(true);
});

test("Check if Two Arrays Are Equal ", () => {
  expect(equalArray([4, 5, 6], [4, 5, 6])).toBe(true);
});

test("Check if Two Arrays Are Equal ", () => {
  expect(equalArray([7, 8, 9], [7, 8, 9])).toBe(true);
});

test("Check if Two Arrays Are Equal ", () => {
  expect(equalArray([113, 117, 125], [113, 117, 119]));
});

test("Check if Two Arrays Are Equal ", () => {
  expect(equalArray([0.14, 0, 55, 0.98], [0.14, 0, 55, 0.98]));
});
