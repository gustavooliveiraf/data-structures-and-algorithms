// https://leetcode.com/problems/decode-string/
var decodeStringRecursion = function(queue) {
  let sub = new String();
  let repeat = 0;

  while (queue.length) {
    const char = queue.shift();

    if (!isNaN(char)) {
      const digit = parseInt(char);
      repeat = 10 * repeat + digit;
    } else if (char === '[') {
      const subsub = decodeStringRecursion(queue);
      sub += subsub.repeat(repeat);
      repeat = 0;
    } else if (char === ']') {
      break;
    } else {
      sub += char;
    }
  }

  return sub;
};

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  return decodeStringRecursion(s.split(''));
};

const s = "2[abc]3[cd]ef";
console.log(decodeString(s));
