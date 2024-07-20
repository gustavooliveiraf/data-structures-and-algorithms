// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
function findUpperBound(nums, target) {
  let left = 0, right = nums.length - 1;
  let result = null;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (nums[mid] <= target) {
      left++;
    } else {
      result = mid;
      right--;
    }
  }

  return result;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
  const negIndex = findUpperBound(nums, -1);
  const posIndex = findUpperBound(nums, 0);

  const neg = negIndex !== null ? negIndex : nums.length;
  const pos = posIndex !== null ? (nums.length - posIndex) : 0;

  return Math.max(neg, pos);
};

const nums = [-1];
console.log(maximumCount(nums));
