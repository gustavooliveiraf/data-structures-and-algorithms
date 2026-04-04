class SolutionBacktracking {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canPartition(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur);
    if (sum % 2 === 1) return false;

    const memo = Array.from({ length: nums.length }, () => new Array(2500));
    let found = false;

    const dfs = (i, target) => {
      if (i === nums.length) {
        return false;
      }
      if (target === 0 || found) {
        return found = true;
      }
      if (memo[i][target] !== undefined) {
        return memo[i][target];
      }

      memo[i][target] = dfs(i + 1, target - nums[i]) || dfs(i + 1, target);
      return memo[i][target];
    }

    return dfs(0, sum >> 1);
  }
}

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canPartition(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur);
    if (sum % 2 === 1) return false;

    const target = sum >> 1;
    const dp = Array.from({ length: nums.length + 1 }, () => new Array(target + 1).fill(false));

    dp[0][0] = true;
    for (let i = 1; i <= nums.length; i++) {
      dp[i][0] = true;
      for (let j = 0; j <= target; j++) {
        if (nums[i - 1] <= j) {
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    return dp[nums.length][target];
  }
}

const nums = [1,2,5];
console.log(new Solution().canPartition(nums));
