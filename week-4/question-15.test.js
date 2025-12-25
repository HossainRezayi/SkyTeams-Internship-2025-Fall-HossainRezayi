const maxSubArray = require("./question-15");

describe("Kadane's Algorithm: Max Subarray Sum", () => {
  test("should return 6 for the example array [-2, 1, -3, 4, -1, 2, 1, -5, 4]", () => {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    expect(maxSubArray(input)).toBe(6);
  });
});
