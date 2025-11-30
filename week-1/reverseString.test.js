const reverseString = require("./reverseString");

test("Reverse the given String ", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("Reverse the given String ", () => {
  expect(reverseString(1232132)).not.toBe("olleH");
});

test("Reverse the given String ", () => {
  expect(reverseString("")).not.toBe("olleH");
});
