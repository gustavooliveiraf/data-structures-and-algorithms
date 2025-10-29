// https://leetcode.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function(cost) {
//   const mem = new Array(cost.length);
//   mem[0] = cost[0];
//   mem[1] = cost[1];

//   for (let i = 2; i <= cost.length; i++) {
//     mem[i] = Math.min(mem[i - 1], mem[i - 2]) + cost[i];
//   }

//   return Math.min(mem[cost.length - 1], mem[cost.length - 2]);
// };

var minCostClimbingStairs = function(cost, index = cost.length, memo = new Array(cost.length + 1)) {
  if (index === 0 || index === 1) {
    return cost[index];
  } else if (memo[index]) {
    return memo[index];
  }

  return memo[index] = Math.min(minCostClimbingStairs(cost, index - 1, memo), minCostClimbingStairs(cost, index - 2, memo))
                       +
                       (cost[index] || 0);
}

const cost = [10,15,20];
console.log(minCostClimbingStairs(cost));
