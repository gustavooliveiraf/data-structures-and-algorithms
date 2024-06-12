class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    const set = new Set();
    let count = 0, localCount = 0;

    for (let char of s) {
      if (set.has(char)) {
        count = Math.max(count, localCount);

        for (let setChar of set) {
          set.delete(setChar);
          localCount--;

          if (setChar === char) {
              break;
          }
        }
        
      }

      localCount++;
      set.add(char);
    }

    count = Math.max(count, localCount);

    return count;

  }
}

const s = "dvdf";
console.log(new Solution().lengthOfLongestSubstring(s));
