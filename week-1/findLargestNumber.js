// 3. Test a function that finds the largest number in a collection. 

function FindLargestNumber(nums) {
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) largest = nums[i];
  }
  return largest;
}

module.exports = FindLargestNumber;
