// https://leetcode.com/problems/3sum-closest/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var twoSumClosest = function(nums, target, left, right) {
  let closest = Infinity;
  while (left < right) {
    closest = Math.abs(target -nums[left] -nums[right]) < Math.abs(target - closest) ? (nums[left] + nums[right]) : closest;

    if (target > nums[left] + nums[right]) {
      left++;
    } else {
      right--;
    }
  }

  return closest;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let closestGlobal = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    const twoSum = twoSumClosest(nums, target - nums[i], i + 1, nums.length - 1);
    const closestLocal = nums[i] + twoSum;
    closestGlobal = Math.abs(target - closestLocal) < Math.abs(target - closestGlobal) ? closestLocal : closestGlobal;
  }

  return closestGlobal;
};

const nums = [-4,2,2,3,3,3], target = 0;
console.log(threeSumClosest(nums, target));
