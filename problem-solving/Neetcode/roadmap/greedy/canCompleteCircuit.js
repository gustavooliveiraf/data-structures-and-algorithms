class Solution {
  /**
   * @param {number[]} gas
   * @param {number[]} cost
   * @return {number}
   */
  canCompleteCircuit(gas, cost) {
    if (gas.reduce((acc, cur) => acc + cur) < cost.reduce((acc, cur) => acc + cur)) {
      return -1;
    }

    let totalLocal = 0, res = 0;
    for (let i = 0; i < gas.length; i++) {
      totalLocal += gas[i] - cost[i];
      if (totalLocal < 0) {
        totalLocal = 0;
        res = i + 1;
      }
    }

    return res;
  }
}

const gas = [1,2,3,4], cost = [2,2,4,1];
console.log(new Solution().canCompleteCircuit(gas, cost));
