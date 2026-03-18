class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    let localSum = -Infinity, globalSum = -Infinity;
    for (const num of nums) {
      localSum = Math.max(localSum + num, num);
      globalSum = Math.max(localSum, globalSum);
    }

    return globalSum;
  }
}

const nums = [2,-3,4,-2,2,1,-1,4];
console.log(new Solution().maxSubArray(nums));
