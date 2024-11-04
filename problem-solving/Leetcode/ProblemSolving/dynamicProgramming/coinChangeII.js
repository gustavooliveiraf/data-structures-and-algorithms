// https://leetcode.com/problems/coin-change-ii
function dp(amount, coins, index, memo) {
  if (memo[index][amount] !== undefined) {
    return memo[index][amount];
  } else if (index === coins.length || coins[index] > amount) {
    return memo[index][amount] = 0;
  } else if (coins[index] === amount) {
    return memo[index][amount] = 1;
  }

  return memo[index][amount] = dp(amount - coins[index], coins, index, memo)
                               +
                               dp(amount, coins, index + 1, memo);
};

var change = function(amount, coins) {
  if (amount === 0) {
    return 1;
  }
  const memo = new Array(coins.length + 1).fill(null).map(_ => new Array());
  return dp(amount, coins.sort((a, b) => a - b), 0, memo);
}

const amount = 0, coins = [1];
console.log(change(amount, coins));
