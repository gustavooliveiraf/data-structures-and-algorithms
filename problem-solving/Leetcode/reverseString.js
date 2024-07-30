// https://leetcode.com/problems/reverse-string/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(str) {
  let i = 0, j = str.length - 1;
  while (i < j) {
    [str[i], str[j]] = [str[j], str[i]];
    i++;
    j--;
  }

  return str;
};

const s = ["h","e","l","l","o"];
console.log(reverseString(s));
