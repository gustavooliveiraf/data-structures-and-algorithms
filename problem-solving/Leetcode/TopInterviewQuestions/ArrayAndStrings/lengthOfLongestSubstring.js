// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/
function spliceString(str, set, char) {
  const indexOf = str.indexOf(char);
  for (let i = 0; i <= indexOf; i++)
    set.delete(str[i]);

  return indexOf;
}

var lengthOfLongestSubstring = function(str) {
  const longStr = (new Array(str.length)).fill(0);
  for (let i = 0, strAux = '', set = new Set(); i < str.length; i++) {
    if (!set.has(str[i])) {
      longStr[i] = (longStr[i - 1] || 0) + 1;
    } else {
      const indexOf = spliceString(strAux, set, str[i]);
      longStr[i] = longStr[i - 1] - indexOf;
      strAux = strAux.slice(indexOf + 1);
    }

    strAux += str[i];
    set.add(str[i]);
  }

  return longStr.reduce((a, b) => Math.max(a, b), 0);
};

const str = "abcabcbb"
console.log(lengthOfLongestSubstring(str));
