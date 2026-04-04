class SolutionBacktracking {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    const mem = new Array(nums.length);

    const dfs = (i) => {
      if (i >= nums.length) return 0;
      if (mem[i]) return mem[i];

      return mem[i] = Math.max(nums[i] + dfs(i + 2), nums[i] + dfs(i + 3));
    }

    return Math.max(dfs(0), dfs(1));
  }
}

class SolutionDP {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    if (nums.length === 1) return nums[0];

    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp.at(-1);
  }
}

// const nums = [5,1,2,10,6,2,7,9,3,1];
const nums=[0]
console.log(new SolutionDP().rob(nums));
