class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const OPERATORS = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => Math.trunc(a / b)
    }
    const stack = new Array();
    for (let token of tokens) {
      if (token in OPERATORS) {
        const [left, right] = [stack.pop(), stack.pop()];
        const result = OPERATORS[token](right, left);
        stack.push(result);
      } else {
        stack.push(Number(token));
      }
    }

    return stack[0];
  }
}

const tokens = ["1","2","+","3","*","4","-"];
console.log(new Solution().evalRPN(tokens));
