// https://leetcode.com/problems/separate-black-and-white-balls/
/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
  let pointer = 0, swaps = 0;
  for (let index in s) {
    if (s[index] === '0') {
      swaps += index - pointer;
      pointer++;
    }
  }

  return swaps;
};

const s = "0111"
console.log(minimumSteps(s));
