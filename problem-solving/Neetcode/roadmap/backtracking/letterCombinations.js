class Solution {
  /**
   * @param {string} digits
   * @return {string[]}
   */
  letterCombinations(
    digits,
    part = '',
    i = 0,
    res = [],
    mapDigitToChar = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'qprs',
        8: 'tuv',
        9: 'wxyz',
    }
  ) {
    if (digits.length === 0) return res;
    if (i === digits.length) {
      return res.push(part);
    }

    for (const char of mapDigitToChar[digits[i]]) {
      this.letterCombinations(digits, part + char, i + 1, res, mapDigitToChar);
    }

    return res;
  }
}

const digits = "34";
console.log(new Solution().letterCombinations(digits));
