// https://leetcode.com/problems/maximum-product-subarray
var maxProduct = function(nums) {
  let globalMax = nums[0];
  for (let i = 1, maxLocal = globalMax, minLocal = globalMax, candidates = []; i < nums.length; i++) {
    candidates = [nums[i], maxLocal * nums[i], minLocal * nums[i]];
    maxLocal = Math.max(...candidates);
    minLocal = Math.min(...candidates);

    globalMax = Math.max(globalMax, maxLocal);
  }

  return globalMax;
};

const arr = [2,3,-2,4];
console.log(maxProduct(arr));
 