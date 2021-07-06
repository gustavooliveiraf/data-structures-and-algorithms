// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/
var increasingTriplet = function(nums) {
  if (nums.length < 3) return false;

  for (let i = 0, minOne = Infinity, minTwo = Infinity; i < nums.length; i++) {
    if (nums[i] <= minOne) minOne = nums[i];
    else if (nums[i] <= minTwo) minTwo = nums[i];
    else return true;
  }

  return false;
};

const nums = [1,2,3,4,5];
console.log(increasingTriplet(nums));
