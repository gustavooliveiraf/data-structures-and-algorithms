// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[index]) {
      index++;
      nums[index] = nums[i];
    }
  }

  return index + 1;
};

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
