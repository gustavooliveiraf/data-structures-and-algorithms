// https://leetcode.com/problems/faulty-keyboard
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
  let front = '', back = '';
  for (let char of s) {
    if (char === 'i') {
      const temp = front;
      front = back;
      back = temp;
    } else {
      front += char;
      back = char + back;
    }
  }

  return front;
};

const s = 'string';
console.log(finalString(s));
