// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let localMax = nums[0];
  let globalMax = nums[0];

  for (i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }

  return globalMax;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
