const permutations = require("./question-14");

test("All Permutations of a String", () => {
  expect(permutations("abc")).toBe("abc,acb,bac,bca,cab,cba");
});
