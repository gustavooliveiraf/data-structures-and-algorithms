class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  longestPalindrome(s) {
    let resL = 0, resLen = 0;

    for (let i = 0; i < s.length; i++) {
      let l = i, r = i;
      while (l >= 0 && r < s.length && s[l] === s[r]) {
        if (r - l + 1 > resLen) {
          resL = l;
          resLen = r - l + 1;
        }
        l--;
        r++;
      }
    }

    for (let i = 0; i < s.length; i++) {
      let l = i, r = i + 1;
      while (l >= 0 && r < s.length && s[l] === s[r]) {
        if (r - l + 1 > resLen) {
          resL = l;
          resLen = r - l + 1;
        }
        l--;
        r++;
      }
    }

    return s.substring(resL, resL + resLen);
  }
}

const s = "a";
console.log(new Solution().longestPalindrome(s));
