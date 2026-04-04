class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxProduct(nums) {
    let localMax = 1, localMin = 1;
    let globalMax = nums[0];

    for (const num of nums) {
      const temp = localMax;
      localMax = Math.max(localMax * num, localMin * num, num);
      localMin = Math.min(localMin * num, temp * num, num);

      globalMax = Math.max(globalMax, localMax);
    }

    return globalMax;
  }
}

const nums = [-2,3,-4];
console.log(new Solution().maxProduct(nums));
