class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    const count = new Map();
    let result = 0;

    let l = 0;
    for (let r = 0; r < s.length; r++) {
      count.set(s[r], (count.get(s[r]) || 0) + 1);

      while (r - l + 1 - Math.max(...count.values()) > k) {
          count.set(s[l], count.get(s[l]) - 1);
          l += 1;
      }

      result = Math.max(result, r - l + 1);
    }

    return result;
  }
}

const s = "AABABBA", k = 1;
console.log(new Solution().characterReplacement(s, k));
