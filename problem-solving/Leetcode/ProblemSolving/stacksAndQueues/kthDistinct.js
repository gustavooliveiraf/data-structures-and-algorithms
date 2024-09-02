// https://leetcode.com/problems/kth-distinct-string-in-an-array/
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  const map = arr.reduce(
    (map, cur) => map.set(cur, (map.get(cur) || 0) + 1),
    new Map());

  for (elem of arr) {
    if (map.get(elem) === 1) {
      k--;
      if (k === 0) {
        return elem;
      }
    }
  }

  return '';
};

const arr = ["d","b","c","b","c","a"], k = 2;
console.log(kthDistinct(arr, k));
