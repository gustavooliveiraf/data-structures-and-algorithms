class Solution {
  constructor() {
    this.result = new Array();
    this.subset = new Array();
    this.nums;
  }

  dfs(index) {
    if (index === this.nums.length) {
      this.result.push([...this.subset]);
      return;
    }

    this.subset.push(this.nums[index]);
    this.dfs(index + 1);

    this.subset.pop();
    this.dfs(index + 1);
  }

  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsets(nums) {
    this.nums = nums;
    this.dfs(0);

    return this.result;
  }
}

class Solution2 {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsets(nums, j = 0, subset = [], res = [[]]) {
    if (j === nums.length) return res;

    for (let i = j; i < nums.length; i++) {
      subset.push(nums[i]);
      res.push([...subset]);
      this.subsets(nums, i + 1, subset, res);

      subset.pop();
    }

    return res;
  }
}

const nums = [1,2,3];
console.log(new Solution().subsets(nums));
