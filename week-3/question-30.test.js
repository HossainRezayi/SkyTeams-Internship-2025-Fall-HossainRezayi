const missingNumber = require("./question-30");

test("Find Missing Number in Array (1 to N) ", () => {
  expect(missingNumber([1, 2, 4, 5])).toBe(3);
});

test("Find Missing Number in Array (1 to N) ", () => {
  expect(missingNumber([1, 3, 4, 5, 6])).toBe(2);
});

test("Find Missing Number in Array (1 to N) ", () => {
  expect(missingNumber([1, 2, 3, 5]));
});

test("Find Missing Number in Array (1 to N) ", () => {
  expect(missingNumber([1, 2, 3, 4, 5, 7, 8, 9])).toBe(6);
});

test("Find Missing Number in Array (1 to N) ", () => {
  expect(missingNumber([1, 2, 3, 4, 6, 7, 8, 9])).toBe(5);
});
