class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    let stack = new Array();
    let result = new Array();

    function backtrack(openN, closedN) {
      if (openN === closedN && openN === n) {
        result.push(stack.join(''));
        return;
      }
      
      if (openN < n) {
        stack.push('(');
        backtrack(openN + 1, closedN);
        stack.pop();
      }
      
      if (closedN < openN) {
        stack.push(')');
        backtrack(openN, closedN + 1);
        stack.pop();
      }
    }

    backtrack(0, 0);

    return result;
  }
}

const n = 3;
console.log(new Solution().generateParenthesis(n));
