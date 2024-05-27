class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const map = new Map();
    for (let num of nums) {
      map.set(num, 1);
    }

    for (let num of new Set(nums)) {
      if (!map.has(num)) {
        continue;
      }

      let sum = 0;
      for (let prev = num - 1; map.has(prev); prev--) {
        sum += map.get(prev);
        map.delete(prev);
      }

      map.set(num, map.get(num) + sum);
    }

    return Array.from(map.values()).reduce((acc, cur) => cur > acc ? cur : acc, 0);
  }
}

const nums = [0,3,2,5,4,6,1,1];
console.log(new Solution().longestConsecutive(nums));
