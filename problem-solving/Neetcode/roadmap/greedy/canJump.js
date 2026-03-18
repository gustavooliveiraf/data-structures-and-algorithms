class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canJump(nums) {
    let goal = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] + i >= goal) {
        goal = i;
      }
    }

    return goal === 0;
  }
}


class Solution2 {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canJump(nums) {
    nums[nums.length - 1] = true;
    for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] + i >= nums.length - 1) {
        nums[i] = true;
        continue;
      }

      for (let j = 1; j <= nums[i]; j++) {
        if (nums[i + j] === true) {
          nums[i] = true;
          break;
        }
      }

      if (nums[i] !== true) {
        nums[i] = false;
      }
    }

    return nums[0];
  }
}

const nums = [1,2,0,1,0];
console.log(new Solution().canJump(nums));
