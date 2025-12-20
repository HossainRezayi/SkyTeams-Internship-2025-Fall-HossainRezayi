/*
15. Kadane’s Algorithm (Max Subarray Sum) 
Example: 
[-2,1,-3,4,-1,2,1,-5,4] → 6 
*/

function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    maxSoFar = Math.max(maxSoFar, currentSum);
  }

  return maxSoFar;
}

module.exports = maxSubArray;
