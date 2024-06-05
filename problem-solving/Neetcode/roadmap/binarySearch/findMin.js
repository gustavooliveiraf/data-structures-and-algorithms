class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMin(nums) {
    let l = 0, r = nums.length - 1;

    while (l < r) {
      const  mid = (l + r) >> 1;

      if (nums[l] < nums[r]) {
        return nums[l];
      }
      if (nums[l] <= nums[mid]) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }

    return nums[l];
  }
}

const nums = [3,4,5,6,1,2];
console.log(new Solution().findMin(nums));
