const atmSystem = require("./question-8");

test("Menu-Based ATM System", () => {
  expect(atmSystem("balance")).toBe("Your account balance is 0");
});

test("Menu-Based ATM System", () => {
  expect(atmSystem("withdraw", 100)).toBe("You do not have enough money.");
});

test("Menu-Based ATM System", () => {
  expect(atmSystem("deposite", 100)).toBe("100 deposite successfuly");
});

test("Menu-Based ATM System", () => {
  expect(atmSystem("exit")).toBe("You Exited successfuly");
});
