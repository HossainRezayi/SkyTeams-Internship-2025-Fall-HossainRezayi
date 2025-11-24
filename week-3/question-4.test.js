const Factors = require("./question-4");

test("Display all factors of a number ", () => {
  expect(Factors(12)).toBe("1, 2, 3, 4, 6, 12");
});

test("Display all factors of a number ", () => {
  expect(Factors(9)).toBe("1, 3, 9");
});

test("Display all factors of a number ", () => {
  expect(Factors(20)).toBe("1, 2, 4, 5, 10, 20");
});

test("Display all factors of a number ", () => {
  expect(Factors(100)).toBe("1, 2, 4, 5, 10, 20, 25, 50, 100");
});

test("Display all factors of a number ", () => {
  expect(Factors(101)).toBe("1, 101");
});
