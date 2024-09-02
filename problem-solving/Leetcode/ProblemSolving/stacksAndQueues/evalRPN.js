// https://leetcode.com/problems/evaluate-reverse-polish-notation/
const expr = {
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '-': (a, b) => a - b
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = new Array();
  tokens.forEach(elem => {
    if (Number.isInteger(parseInt(elem))) {
      stack.push(parseInt(elem))
    } else {
      const b = stack.pop();
      const a = stack.pop();

      stack.push(parseInt(expr[elem](a, b)));
    }
  })

  return stack[0];
};

const tokens = ["0","3","/"];
console.log(evalRPN(tokens));
