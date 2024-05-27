class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map = new Map();
    for (let index = 0; index < nums.length; index++) {
      map.set(nums[index], index);
    }

    for (let index = 0; index < nums.length; index++) {
      const indexMap = map.get(target - nums[index]);
      if (indexMap !== undefined && indexMap !== index) {
        return indexMap < index ? [indexMap, index] : [index, indexMap]
      }
    }
  }
}

// const nums = [3,4,5,6], target = 7;
// const nums = [4,5,6], target = 10;
const nums = [5,5], target = 10;
console.log(new Solution().twoSum(nums, target));
