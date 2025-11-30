const isRotation = require("./question-11");

test("String Rotation Check ", () => {
  expect(isRotation("waterbottle", "erbottlewat")).toBe(true);
});

test("String Rotation Check ", () => {
  expect(isRotation("hello", "olleh")).toBe(true);
});

test("String Rotation Check ", () => {
  expect(isRotation("pet", "tep")).toBe(true);
});

test("String Rotation Check ", () => {
  expect(isRotation("Ali", "ilA")).toBe(true);
});

test("String Rotation Check ", () => {
  expect(isRotation("Ahmad", "damha")).toBe(true);
});

test("String Rotation Check ", () => {
  expect(isRotation("ABCDEFG", "gfedcba")).toBe(true);
});
