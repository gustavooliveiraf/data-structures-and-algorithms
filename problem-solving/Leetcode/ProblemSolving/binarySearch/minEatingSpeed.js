// https://leetcode.com/problems/koko-eating-bananas
function countHours(arr, vel) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.ceil(arr[i] / vel);
  }

  return sum;
}

var minEatingSpeed = function(piles, h) {
  let left = 1, right = Math.max(...piles);
  let minGLobal = right;

  while (left <= right) {
    let k = Math.floor((right + left) / 2);
    let sumHours = countHours(piles, k);

    if (sumHours <= h) {
      right = k - 1;
      minGLobal = Math.min(minGLobal, k);
    } else {
      left = k + 1;
    }
  }

  return minGLobal;
};
