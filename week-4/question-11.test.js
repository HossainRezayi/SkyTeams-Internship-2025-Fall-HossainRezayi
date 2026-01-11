const isRotation = require("./question-11");

test("String Rotation Check ", () => {
  expect(isRotation("waterbottle", "erbottlewat")).toBe(true);
});

test("String Rotation Check ", () => {
  expect(isRotation("week", "ekwe")).toBe(true);
});

test("String Rotation Check ", () => {
  expect(isRotation("pet", "tpe")).toBe(true);
});

test("String Rotation Check ", () => {
  expect(isRotation("Ali", "iAl")).toBe(true);
});
