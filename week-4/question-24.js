/*
24. K-th Largest Element  
Given an array of numbers and a value k, find the number that would appear in the k-th 
position if the array were sorted in descending order. 
*/

function kthLargestElement(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let temp = nums[i];
      if (temp < nums[j]) {
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums[k - 1];
}

module.exports = kthLargestElement;
