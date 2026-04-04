class SolutionBacktracking {
  /**
   * @param {number[]} cost
   * @return {number}
   */
  minCostClimbingStairs(cost) {
    const mem = new Array(cost.length);

    const dfs = (i) => {
      if (i >= cost.length) return 0;
      if (mem[i] !== undefined) return mem[i];

      return mem[i] = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
    }

    return Math.min(dfs(0), dfs(1));
  }
}

class SolutionDP {
  /**
   * @param {number[]} cost
   * @return {number}
   */
  minCostClimbingStairs(cost) {
    const dp = new Array(cost.length + 1).fill(0);

    for (let i = 2; i <= cost.length; i++) {
      dp[i] = Math.min(cost[i - 1] + dp[i - 1], cost[i - 2] + dp[i - 2]);
    }

    return dp.at(-1);
  }
}

const cost = [1,2,1,2,1,1,1];
console.log(new Solution().minCostClimbingStairs(cost));
