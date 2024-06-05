class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  search(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const  mid = (l + r) >> 1;

      if (nums[mid] === target) {
        return mid;
      }
      
      if (nums[l] <= nums[mid]) {
        if (target > nums[mid] || target < nums[l]) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      } else {
        if (target < nums[mid] || target > nums[r]) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      }
    }

    return -1;
  }
}

const nums = [3,4,5,6,1,2], target = 1;
console.log(new Solution().search(nums, target));
