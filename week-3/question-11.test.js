const PrimeUpToN = require("./qusetion-11");

test("Generate all prime numbers up to N ", () => {
  expect(PrimeUpToN(10)).toBe("2, 3, 5, 7");
});

test("Generate all prime numbers up to N ", () => {
  expect(PrimeUpToN(13)).toBe("2, 3, 5, 7, 11");
});

test("Generate all prime numbers up to N ", () => {
  expect(PrimeUpToN(20)).toBe("2, 3, 5, 7, 11, 13, 17, 19");
});

test("Generate all prime numbers up to N ", () => {
  expect(PrimeUpToN(25)).toBe("2, 3, 5, 7, 11, 13, 17, 19, 23");
});

test("Generate all prime numbers up to N ", () => {
  expect(PrimeUpToN(30)).toBe("2, 3, 5, 7, 11, 13, 17, 19, 23, 29");
});
