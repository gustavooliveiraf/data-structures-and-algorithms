class Solution {
  isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }

  /**
   * @param {string} s
   * @return {string[][]}
   */
  partition(str, substrList = [], i = 0, res = []) {
    if (i === str.length) {
      res.push([...substrList]);
    }

    for (let j = i; j < str.length; j++) {
      if (this.isPalindrome(str, i, j)) {
        substrList.push(str.substring(i, j + 1));
        this.partition(str, substrList, j + 1, res);
        substrList.pop();
      }
    }

    return res;
  }
}

const s = "aab";
console.log(new Solution().partition(s));
