class Solution {
  constructor() {
    this.nums
    this.result = new Array();
  }

  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  permute(nums) {
    const result = [];

    if (nums.length === 1) {
      return [[nums[0]]]
    }

    for (let i = 0; i < nums.length; i++) {
      const n = nums.shift();
      const perms = this.permute(nums);

      for (let perm of perms) {
        perm.push(n);
      }
      result.push(...perms);
      nums.push(n);
    }

    return result;
  }
}

const nums = [1,2,3];
console.log(new  Solution().permute(nums));
