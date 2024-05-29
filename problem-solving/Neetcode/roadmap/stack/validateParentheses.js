class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = new Array();
    const map = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
    for (let char of s) {
      if (map.has(char)) {
        stack.push(char);
      } else if (char !== map.get(stack.pop())) {
        return false;
      }
    }

    return stack.length === 0 ? true : false;
  }
}

const s = "([{}])"
console.log(new Solution().isValid(s));
