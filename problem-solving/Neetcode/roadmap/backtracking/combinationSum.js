class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @returns {number[][]}
   */
  combinationSum(nums, target, index = 0, subarr = [], res = []) {
    if (target === 0) {
      return res.push([...subarr]);
    } else if (target < 0 || index === nums.length) {
      return;
    }

    subarr.push(nums[index]);
    this.combinationSum(nums, target - nums[index], index, subarr, res);
    subarr.pop();
    this.combinationSum(nums, target, index + 1, subarr, res);

    return res;
  }
}

const nums = [2,5,6,9], target = 9;
console.log(new Solution().combinationSum(nums, target));
