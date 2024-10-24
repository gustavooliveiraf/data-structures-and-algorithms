// https://leetcode.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const mem = new Array(cost.length);
  mem[0] = cost[0];
  mem[1] = cost[1];

  for (let i = 2; i <= cost.length; i++) {
    mem[i] = Math.min(mem[i - 1], mem[i - 2]) + cost[i];
  }

  return Math.min(mem[cost.length - 1], mem[cost.length - 2]);
};

const cost = [1,100,1,1,1,100,1,1,100,1];
console.log(minCostClimbingStairs(cost));
