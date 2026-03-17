class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n, subarray = [], open = 0, closed = 0, res = []) {
      if (open === n && open === closed) {
        return res.push(subarray.join(''));
      }

      if (open < n) {
        subarray.push('(');
        this.generateParenthesis(n, subarray, open + 1, closed, res);
        subarray.pop();
      }

      if (closed < open) {
        subarray.push(')');
        this.generateParenthesis(n, subarray, open, closed + 1, res);
        subarray.pop();
      }

      return res;
    }
}

const n = 3;
console.log(new Solution().generateParenthesis(n));
