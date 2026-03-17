class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsetsWithDup(nums, numsSorted = nums.sort((a, b) => a - b), set = new Set(), index = 0, subarray = [], res = []) {
    if (index === nums.length) {
      if (!set.has(subarray.join('-'))) {
        set.add(subarray.join('-'));
        res.push([...subarray]);
      }
      return;
    }

    subarray.push(nums[index]);
    this.subsetsWithDup(nums, numsSorted, set, index + 1, subarray, res);
    subarray.pop();
    this.subsetsWithDup(nums, numsSorted, set, index + 1, subarray, res);

    return res;
  }
}

const nums = [1,2,1];
console.log(new Solution().subsetsWithDup(nums));
