class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const map = nums.reduce((map, elem) => map.set(elem, (map.get(elem) || 0) + 1), new Map());
    const bucket = new Array(nums.length + 1).fill(0);
    const ans = new Array();

    for (let [key, value] of map) {
      bucket[value] ?
      bucket[value].push(key) :
      bucket[value] = [key];
    }

    for (let index = bucket.length - 1, count = k; index > 0; index--) {
      if (bucket[index]) {
        for (let elem of bucket[index]) {
          ans.push(elem);
          k--;
          if (k === 0) {
            return ans;
          }
        }
      }
    }
  }
}

const nums = [1,2,2,3,3,3], k = 2;
console.log(new Solution().topKFrequent(nums, k));
