class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  stringToStructuredArray(str) {
    const array = new Array(26).fill(0);
    for (let char of str) {
      const index = char.charCodeAt() - 97;
      array[index]++;
    }

    return array.join('-');
  }

  groupAnagrams(strs) {
    const map = new Map();
    for (let str of strs) {
      const strArray = this.stringToStructuredArray(str);
      const anagrams = map.get(strArray) || new Array();
      anagrams.push(str);
      map.set(strArray, anagrams);
    }

    return Array.from(map.values());
  }
}

const strs = ["bdddddddddd","bbbbbbbbbbc"];
console.log(new Solution().groupAnagrams(strs));
