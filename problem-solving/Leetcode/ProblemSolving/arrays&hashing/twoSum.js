// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = nums.reduce((map, cur, index) => map.set(cur, index), new Map());
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i]) && map.get(target - nums[i]) !== i) {
      return [map.get(target - nums[i]), i];
    }
  }
};