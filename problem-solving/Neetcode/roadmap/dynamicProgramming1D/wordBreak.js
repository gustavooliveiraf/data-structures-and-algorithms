// Time Limit Exceeded. You may have an infinite loop or your code is too inefficient.
class SolutionBacktracking {
  /**
   * @param {string} s
   * @param {string[]} wordDict
   * @return {boolean}
   */
  wordBreak(s, wordDict, j = 0, memo = new Map([[s.length, true]])) {
    if (j > s.length) return false;
    if (memo.has(j)) return memo.get(j);

    for (const word of wordDict) {
      if (word === s.substring(j, j + word.length)) {
        if (this.wordBreak(s, wordDict, j + word.length)) {
          memo.set(j, true);
          return true;
        }
      }
    }

    memo.set(j, false);
    return false;
  }
}

class Solution {
  /**
   * @param {string} s
   * @param {string[]} wordDict
   * @return {boolean}
   */
  wordBreak(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
      for (const word of wordDict) {
        if (i + word.length <= s.length && s.substring(i, i + word.length) === word) {
          dp[i] = dp[i + word.length];
        }
        if (dp[i]) {
          break;
        }
      }
    }

    return dp[0];
  }
}

const s="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const wordDict = ["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa","ba"];
console.log(new Solution().wordBreak(s, wordDict));
