// https://leetcode.com/problems/basic-calculator-ii
const operation = {
  '*': (a, b) => a * b,
  '/': (a, b) => Math.trunc(a / b)
}
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = new Array();
  let number = ''
  for (let char of s) {
    if (char === ' ') continue;
    if (char === '+' || char === '-' || char === '*' || char === '/') {
      stack.push(parseInt(number, 10));
      stack.push(char);
      number = '';
    } else {
      number += char;
    }
  }
  number ? stack.push(parseInt(number, 10)) : null;

  const stack2 = new Array();
  for (let i = 0; i < stack.length; i++) {
    const elem = stack[i];
    if (Number.isInteger(elem)) {
      stack2.push(elem);
    } else if (elem === '+') {
      continue;
    } else if (elem === '-') {
      i = i + 1;
      const nextElem = stack[i];
      stack2.push(-nextElem);
    } else {
      const prevElem = stack2.pop();
      i = i + 1;
      const nextElem = stack[i];
      const result = operation[elem](prevElem, nextElem);
      stack2.push(result);
    }
  }

  return stack2.reduce((a, b) => a + b);
};

const s = "14-3/2";
console.log(calculate(s));
