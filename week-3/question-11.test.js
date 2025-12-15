const primeUpToN = require("./qusetion-11");

test("Generate all prime numbers up to N ", () => {
  expect(primeUpToN(10)).toBe("2, 3, 5, 7");
});

test("Generate all prime numbers up to N ", () => {
  expect(primeUpToN(13)).toBe("2, 3, 5, 7, 11");
});

test("Generate all prime numbers up to N ", () => {
  expect(primeUpToN(20)).toBe("2, 3, 5, 7, 11, 13, 17, 19");
});

test("Generate all prime numbers up to N ", () => {
  expect(primeUpToN(25)).toBe("2, 3, 5, 7, 11, 13, 17, 19, 23");
});

test("Generate all prime numbers up to N ", () => {
  expect(primeUpToN(30)).toBe("2, 3, 5, 7, 11, 13, 17, 19, 23, 29");
});
