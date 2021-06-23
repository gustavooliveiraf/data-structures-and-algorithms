// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/798/
var sortColors = function(nums) {
  let zero = 0, one = 0, two = 0;
  nums.forEach(num => {
    if (num === 0) zero++;
    else if (num === 1) one++;
    else two++;
  });

  return nums.fill(0, 0, zero).fill(1, zero, zero + one).fill(2, zero + one, zero + one + two);
};

const nums = [2,0,2,1,1,0];
console.log(sortColors(nums));
