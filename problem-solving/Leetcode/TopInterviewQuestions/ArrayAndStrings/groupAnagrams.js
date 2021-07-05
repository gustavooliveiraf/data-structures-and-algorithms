// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/778/
function charToIndex(char) {
  return char.charCodeAt() - 97;
}

function strToKey(str) {
  const arr = (new Array(26)).fill(0);
  for (let i = 0; i < str.length; i++)
    arr[charToIndex(str[i])]++;

  return arr.join(',');
}

var groupAnagrams = function(strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const key = strToKey(strs[i]);
    const arr = map.get(key) || new Array();
    arr.push(strs[i]);
    if (!map.has(key)) map.set(key, arr);
  }

  return [...map.values()];
};

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));
