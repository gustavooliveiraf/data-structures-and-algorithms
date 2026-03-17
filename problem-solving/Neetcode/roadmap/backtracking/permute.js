class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  permute(nums, index = 0, res = []) {
    if (index === nums.length) {
      return res.push([...nums]);
    }

    for (let i = index; i < nums.length; i++) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      this.permute(nums, index + 1, res);
      [nums[index], nums[i]] = [nums[i], nums[index]];
    }

    return res;
  }
}

const nums = [1,2,3];
console.log(new Solution().permute(nums));
