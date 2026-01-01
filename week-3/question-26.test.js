const convertDecimalToBinary = require("./question-26");

test("Convert Decimal to Binary ", () => {
  expect(convertDecimalToBinary(10)).toBe("1010");
});

test("Convert Decimal to Binary ", () => {
  expect(convertDecimalToBinary(8)).toBe("1000");
});

test("Convert Decimal to Binary ", () => {
  expect(convertDecimalToBinary(13)).toBe("1101");
});

test("Convert Decimal to Binary ", () => {
  expect(convertDecimalToBinary(5)).toBe("101");
});

test("Convert Decimal to Binary ", () => {
  expect(convertDecimalToBinary(15)).toBe("1111");
});
