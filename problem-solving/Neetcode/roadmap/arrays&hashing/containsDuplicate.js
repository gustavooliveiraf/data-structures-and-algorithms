class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const set = new Set();
    for (let elem of nums) {
      if (set.has(elem)) {
        return false;
      }
      set.add(elem);
    }

    return true;
  }
}

const nums = [1, 2, 3];
console.log(new Solution().hasDuplicate(nums));
