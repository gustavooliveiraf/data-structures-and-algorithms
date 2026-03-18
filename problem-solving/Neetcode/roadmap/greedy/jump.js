class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  jump (nums) {
    const dp = new Array(nums.length).fill(Infinity);
    dp[nums.length - 1] = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] + i >= nums.length - 1) {
        dp[i] = 1;
        continue;
      }

      for (let j = 1; j <= nums[i]; j++) {
        dp[i] = Math.min(dp[i], 1 + dp[i + j]);
      }
    }

    return dp[0] != Infinity ? dp[0] : -1;
  }
}

const nums = [0];
console.log(new Solution().jump(nums));
