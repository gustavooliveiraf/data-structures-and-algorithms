// RangeError: Maximum call stack size exceeded
class SolutionBacktracking {
  /**
   * @param {number[]} coins
   * @param {number} amount
   * @return {number}
   */
  coinChange(coins, amount) {
    const memo = new Map();

    coins.sort((a, b) => a - b);
    const dfs = (amount, index) => {
      if (memo.has(amount)) {
        return memo.get(amount);
      }
      if (amount === 0) {
        return 0;
      }
      if (index === coins.length || amount < coins[index]) {
        return Infinity;
      }

      const countWith = 1 + dfs(amount - coins[index], index);
      const countNo = dfs(amount, index + 1);
      memo.set(amount, Math.min(countWith, countNo));

      return memo.get(amount);
    }

    const res = dfs(amount, 0);
    return res !== Infinity ? res : -1;
  }
}

class Solution {
  /**
   * @param {number[]} coins
   * @param {number} amount
   * @return {number}
   */
  coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < coins.length; j++) {
        if (i - coins[j] >= 0) {
          dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
        }
      }
    }

    return dp[amount] !== Infinity ? dp[amount] : -1;
  }
}

const coins = [1,100], amount = 99999;
console.log(new Solution().coinChange(coins, amount));
