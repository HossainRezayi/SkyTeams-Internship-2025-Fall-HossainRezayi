const compressionString = require("./question-9");

test("String Compression ", () => {
  expect(compressionString("aabcccccaaa")).toBe("a2b1c5a3");
});

test("String Compression ", () => {
  expect(compressionString("bbccccaaaaddd")).toBe("b2c4a4d3");
});

test("String Compression ", () => {
  expect(compressionString("zzzyyyxxwwww")).toBe("z3y3x2w4");
});

test("String Compression ", () => {
  expect(compressionString("mmnnnnnnnoooopp")).toBe("m2n7o4p2");
});
