// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target
function findLowerBound(nums, bsTarget, left = 0) {
  let right = nums.length - 1;
  let result = left - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (nums[mid] >= bsTarget) {
      right = mid - 1;
    } else {
      result = mid;
      left = mid + 1;
    }
  }

  return result;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  nums.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    const greatestIndexSmallerThanBSTarget = findLowerBound(nums, target - nums[i], i + 1);

    count += greatestIndexSmallerThanBSTarget - i;
  }

  return count;
};

const nums = [9,-5,-5,5,-5,-4,-6,6,-6], target = 3;
console.log(countPairs(nums, target));
