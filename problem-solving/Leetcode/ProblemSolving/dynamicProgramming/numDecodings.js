// https://leetcode.com/problems/decode-ways
function isTwoNumberCode(s, index) {
  if (index + 1 >= s.length) {
    return false;
  } else if (s[index] >= 3 || (s[index] == 2 && s[index + 1] >= 7)) {
    return false;
  }

  return true;
}

var numDecodings = function(s, index = 0, memo = new Array(100).fill(null)) {
  if (memo[index] != null) {
    return memo[index];
  } else if (index == s.length - 1 && s[index] != 0) {
    return memo[index] = 1;
  }

  if (s[index] == 0) {
    return memo[index] = 0;
  } else if (isTwoNumberCode(s, index)) {
    if (index + 2 < s.length) {
      return memo[index] = numDecodings(s, index + 1, memo) + numDecodings(s, index + 2, memo);
    } else {
      return memo[index] = numDecodings(s, index + 1, memo) + 1;
    }
  } else {
    return memo[index] = numDecodings(s, index + 1, memo);
  }
};

const s = "1201234";
console.log(numDecodings(s));
