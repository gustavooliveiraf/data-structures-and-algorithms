class SolutionBacktracking {
  /**
   * @param {string} s
   * @return {number}
   */
  numDecodings(str, index = 0, mem = new Map()) {
    if (mem.has(index)) {
      return mem.get(index);
    }
    if (str[index] === '0') {
      return 0;
    }
    if (index >= str.length) {
      return 1;
    }

    if (index < str.length - 1 && (parseInt(str.substring(index, index + 2)) <= 26)) {
      mem.set(index, this.numDecodings(str, index + 1, mem) + this.numDecodings(str, index + 2, mem));
    } else {
      mem.set(index, this.numDecodings(str, index + 1, mem));
    }

    return mem.get(index);
  }
}

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  numDecodings(str) {
    const dp = new Array(str.length + 1).fill(0);
    dp[str.length] = 1

    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === '0') {
        dp[i] = 0;
      } else {
        dp[i] = dp[i + 1];
        if (i < str.length - 1 && (parseInt(str.substring(i, i + 2)) <= 26)) {
          dp[i] += dp[i + 2];
        }
      }
    }

    return dp[0];
  }
}

const s = "06";
console.log(new Solution().numDecodings(s));
