class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
      let mid, l = 0, r = nums.length - 1;
      while (l <= r) {
        mid = (l + r) >> 1;

        if (nums[mid] === target) {
          return mid;
        } else if (target < nums[mid]) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      }

      return nums[mid] < target ? mid + 1 : mid;
    }
}

const nums = [-1,0,2,4,6,8], target = 10;
console.log(new Solution().searchInsert(nums, target));
