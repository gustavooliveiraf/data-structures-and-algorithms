// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/801/
var findPeakElement = function(nums) {
  nums[-1] = nums[nums.length] = -Infinity;
  let start = 0, end = nums.length - 2, mid;
  while (start <= end) {
    mid = (start + end) >> 1;
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
    else if (nums[mid - 1] > nums[mid]) end = mid - 1;
    else start = mid + 1;
  }
};

const nums = [1,2,1,3,5,6,4];
console.log(findPeakElement(nums));
