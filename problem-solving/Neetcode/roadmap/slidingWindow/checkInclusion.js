class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
      return false;
    }

    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);
    let matches = 0;
    const a = 'a'.charCodeAt();

    for (let index = 0; index < s1.length; index++) {
      s1Count[s1[index].charCodeAt() - a]++;
      s2Count[s2[index].charCodeAt() - a]++;
    }

    for (let index = 0; index < 26; index++) {
      matches += s1Count[index] === s2Count[index] ? 1 : 0;
    }

    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
      if (matches === 26) {
        return true;
      }

      let char = s2[r].charCodeAt() - a;
      s2Count[char]++;
      matches += s1Count[char] === s2Count[char] ? 1 : 0;
      matches -= s1Count[char] === s2Count[char] - 1 ? 1 : 0;

      char = s2[l].charCodeAt() - a;
      s2Count[char]--;
      matches += s1Count[char] === s2Count[char] ? 1 : 0;
      matches -= s1Count[char] === s2Count[char] + 1 ? 1 : 0;

      l++;
    }

    return matches === 26;
  }
}

const s1 = "abc", s2 = "bbbca";
console.log(new Solution().checkInclusion(s1, s2));
