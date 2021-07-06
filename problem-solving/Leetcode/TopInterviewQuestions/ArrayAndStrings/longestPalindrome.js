// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/780/
function expandAroundCenter(str, start, end) {
  while (start >= 0 && end < str.length && str[start] === str[end]) {
    start--;
    end++;
  }

  return end - start - 1;
}

var longestPalindrome = function(str) {
  let start = 0, end = 0;
  for (let i = 0; i < str.length; i++) {
    const len1 = expandAroundCenter(str, i, i);
    const len2 = expandAroundCenter(str, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > (end - start)) {
      start = i - ((len - 1) >> 1);
      end = i + (len >> 1);
    }
  }

  return str.substring(start, end + 1);
};

const str = 'cbbd';
console.log(longestPalindrome(str));
