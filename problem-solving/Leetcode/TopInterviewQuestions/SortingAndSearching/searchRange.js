// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/802/
function lowerBound(nums, target) {
  let start = 0, end = nums.length - 1, mid;

  while (start < end) {
    mid = (start + end) >> 1;
    if (nums[mid] < target) start = mid + 1;
    else end = mid;
  }

  return nums[start] === target ? start : -1;
}

function upperBound(nums, target) {
  let start = 0, end = nums.length - 1, mid;

  while (start < end) {
    mid = (start + end >> 1) + 1;
    if (nums[mid] > target) end = mid - 1;
    else start = mid;
  }

  return nums[start] === target ? start : -1;
}

var searchRange = function(nums, target) {
  return [lowerBound(nums, target), upperBound(nums, target)];
}

const nums = [5,7,7,8,8,10], target = 8;
console.log(searchRange(nums, target));
