const frequencyCounter = require("./question-12");

test("Character Frequency Counter ", () => {
  expect(frequencyCounter("banana")).toEqual({ b: 1, a: 3, n: 2 });
});

test("Character Frequency Counter ", () => {
  expect(frequencyCounter("apple")).toEqual({ a: 1, p: 2, l: 1, e: 1 });
});

test("Character Frequency Counter ", () => {
  expect(frequencyCounter("an")).toEqual({ a: 1, n: 1 });
});

test("Character Frequency Counter ", () => {
  expect(frequencyCounter("parameter")).toEqual({
    p: 1,
    a: 2,
    r: 2,
    m: 1,
    e: 2,
    t: 1,
  });
});

test("Character Frequency Counter ", () => {
  expect(frequencyCounter("community")).toEqual({
    c: 1,
    o: 1,
    m: 2,
    u: 1,
    n: 1,
    i: 1,
    t: 1,
    y: 1,
  });
});
