// https://leetcode.com/submissions/detail/514037557/?from=explore&item_id=804
var search = function(nums, target) {
  let start = 0, end = nums.length - 1, mid;
  while (start <= end) {
    mid = (start + end) >> 1;

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] >= nums[start]) {
      if (nums[start] <= target && target < nums[mid]) end = mid - 1;
      else start = mid + 1;
    } else if (nums[mid] < nums[start]) {
      if (nums[mid] < target && target <= nums[end]) start = mid + 1;
      else end = mid - 1;
    }
  }

  return -1;
};

const nums = [4,5,6,7,0,1,2], target = 0;
console.log(search(nums, target));
