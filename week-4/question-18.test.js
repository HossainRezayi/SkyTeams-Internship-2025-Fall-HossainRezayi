const implementStack = require("./question-18");

test("Implement a Stack (Array-Based) ", () => {
  expect(implementStack("isEmpty")).toBe(false);
});

test("Implement a Stack (Array-Based) ", () => {
  expect(implementStack("push", "second")).toBe("second pushed successfully.");
});

test("Implement a Stack (Array-Based) ", () => {
  expect(implementStack("peek")).toBe("first");
});

test("Implement a Stack (Array-Based) ", () => {
  expect(implementStack("pop")).toBe("last element was deleted successfully");
});
