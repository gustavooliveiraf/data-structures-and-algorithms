class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsets(nums, index = 0, subarr = [], res = []) {
    if (index === nums.length) {
      return res.push([...subarr]);
    }

    subarr.push(nums[index]);
    this.subsets(nums, index + 1, subarr, res);
    subarr.pop();
    this.subsets(nums, index + 1, subarr, res);

    return res;
  }
}

const nums = [1, 2, 3];
console.log(new Solution().subsets(nums));
