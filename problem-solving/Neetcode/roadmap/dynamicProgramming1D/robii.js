class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    if (nums.length === 1) return nums[0];

    const memo = Array.from({ length: nums.length }, () => Array(2).fill(-1));

    const dfs = (i, flag) => {
      if (i >= nums.length || (flag === 1 && i === nums.length - 1)) return 0;
      if (memo[i][flag] !== -1) return memo[i][flag];

      return memo[i][flag] = Math.max(dfs(i + 1, flag), nums[i] + dfs(i + 2, flag));
    }

    return Math.max(dfs(0, 1), dfs(1, 0));
  }
}

const nums = [1];
console.log(new Solution().rob(nums));
