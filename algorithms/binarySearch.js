function find(arr, x) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = (l + r) >> 1;

    if (arr[mid] === x) return mid;
    else if (arr[mid] > x) r = mid - 1;
    else l = mid + 1;
  }

  return -1;
}

function findUpperBound(nums, target) {
  let left = 0, right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (nums[mid] <= target) {
      left++;
    } else {
      result = mid;
      right--;
    }
  }

  return result;
}

function findLowerBound(nums, target) {
  let left = 0, right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (nums[mid] >= target) {
      right--;
    } else {
      result = mid;
      left++;
    }
  }

  return result;
}

const arr = [10, 10, 10, 20, 20, 20, 30, 30];
console.log(find(arr, 20));
console.log(findUpperBound(arr, 20));
console.log(findLowerBound(arr, 20));
