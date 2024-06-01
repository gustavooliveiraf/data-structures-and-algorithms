class Solution {
  constructor() {
    this.nums
    this.target
    this.subset = new Array()
    this.result = new Array()
  }
  dfs(index, sum) {
    if (sum > this.target || index === this.nums.length) {
      return;
    } else if (sum === this.target) {
      this.result.push([...this.subset]);
      return;
    }

    this.subset.push(this.nums[index]);
    this.dfs(index, sum + this.nums[index]);

    this.subset.pop();
    this.dfs(index + 1, sum);
  }
  /**
   * @param {number[]} nums
   * @param {number} target
   * @returns {number[][]}
   */
  combinationSum(nums, target) {
    this.nums = nums;
    this.target = target;
    this.dfs(0, 0);

    return this.result;
  }
}

const nums = [3,4,5], target = 16;
console.log(new Solution().combinationSum(nums, target));
