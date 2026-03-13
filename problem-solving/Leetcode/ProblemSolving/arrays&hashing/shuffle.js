/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let i = 0, j = nums.length >> 1;
  const result = new Array();
  for (let i = 0; i < nums.length >> 1; i++, j++) {
    result[2 * i] = nums[i];
    result[2 * i + 1] = nums[j];
  }

  return result;
};

const nums = [2,5,1,3,4,7], n = 3;
console.log(shuffle(nums, n));
