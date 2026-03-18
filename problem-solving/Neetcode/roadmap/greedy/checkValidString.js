class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  checkValidString(s) {
    const stackLeftParen = new Array();
    const stackAsterisk = new Array();
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stackLeftParen.push(i);
      } else if (s[i] === '*') {
        stackAsterisk.push(i);
      } else if (stackLeftParen.length) {
        stackLeftParen.pop();
      } else if (stackAsterisk.length) {
        stackAsterisk.pop();
      } else {
        return false;
      }
    }

    if (stackLeftParen.length > stackAsterisk.length) {
      return false;
    }

    while (stackLeftParen.length) {
      if (stackLeftParen.pop() > stackAsterisk.pop()) {
        return false;
      }
    }

    return true;
  }
}

const s = "((**)";
console.log(new Solution().checkValidString(s));
