class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const str = s.replaceAll(' ', '').replaceAll(/[^0-9a-zA-Z]/g, '').toLowerCase();
    let i = parseInt((str.length - 1) / 2, 10);
    let j = str.length % 2 === 1 ? i : i + 1;

    for (; i >= 0; i--, j++) {
      if (str[i] !== str[j]) {
        return false;
      }
    }

    return true;
  }
}

const s = "Was it a car or a cat I saw?";
console.log(new Solution().isPalindrome(s));