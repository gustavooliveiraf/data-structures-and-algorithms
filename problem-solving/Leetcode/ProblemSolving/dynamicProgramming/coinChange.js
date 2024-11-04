// https://leetcode.com/problems/coin-change
function dp(coins, amount, memo = new Array()) {
  if (amount === 0) {
    return 0;
  }
  if (amount < 0) {
    return Infinity;
  }
  if (memo[amount] != undefined) {
    return memo[amount];
  }

  let min  = Infinity
  for (let coin of coins) {
    min = Math.min(dp(coins, amount - coin, memo) + 1, min);
  }
  return memo[amount] = min;
}

var coinChange = function(coins, amount) {
  if (amount === 0) {
    return 0;
  }

  const response = dp(coins, amount);
  return response === Infinity ? -1 : response;
};

const coins = [186,419,83,408], amount = 6249;
console.log(coinChange(coins, amount));
