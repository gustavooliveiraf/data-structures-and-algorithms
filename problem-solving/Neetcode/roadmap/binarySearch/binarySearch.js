class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
      const mid = (r + l) >> 1;
      if (target < nums[mid]) {
        r = mid - 1;
      } else if (target > nums[mid]) {
        l = mid + 1;
      } else {
        return mid;
      }
    }

    return -1;
  }
}

const nums = [-1,0,2,4,6,8], target = 4;
console.log(new Solution().search(nums, target));
