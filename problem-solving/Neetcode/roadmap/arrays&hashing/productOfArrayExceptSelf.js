class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const result = new Array();
    let prefix = 1;
    let postfix = 1;

    for (let i in nums) {
      result[i] = prefix;
      prefix *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
      result[i] *= postfix;
      postfix *= nums[i];
    }

    return result;
  }
}

const nums = [1,2,4,6];
console.log(new Solution().productExceptSelf(nums));
