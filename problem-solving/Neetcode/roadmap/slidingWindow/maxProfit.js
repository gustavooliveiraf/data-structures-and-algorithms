class Solution {
  /**
   * @param {number} prices
   * @return {number}
   */
  maxProfit(prices) {
    let min = prices[0], profit = 0;
    for (let price of prices) {
      if (price > min) {
        profit = Math.max(profit, price - min);
      } else {
        min = Math.min(min, price);
      }
    }

    return profit;
  }
}

const prices = [10,1,5,6,7,1];
console.log(new Solution().maxProfit(prices));
