// https://leetcode.com/problems/longest-increasing-subsequence
function binarySearch(array, target) {
  let left = 0, right = array.length - 1;
  while (left < right) {
    const mid = (right + left) >> 1;
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const response = new Array();
  response.push(nums.shift());
  for (let num of nums) {
    if (num > response.at(-1)) {
      response.push(num);
    } else {
      const index = binarySearch(response, num);
      response[index] = num;
    }
  }

  return response.length;
};

const nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));
