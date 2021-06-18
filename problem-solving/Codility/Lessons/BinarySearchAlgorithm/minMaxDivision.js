// https://app.codility.com/programmers/lessons/14-binary_search_algorithm/min_max_division/
function isNumberBlocksLessThanK(arr, middle, n, k) {
  let count = 1;
  let accumulator = 0;

  for (let i = 0; i < n; i++) {
    accumulator += arr[i];

    if (accumulator > middle) {
      accumulator = arr[i];
      count++;

      if (count > k) return false;
    }
  }

  return true;
}

function solution(k, m, arr) {
  let start = arr.reduce((a, b) => Math.max(a, b));
  let end   = arr.reduce((a, b) => a + b);
  let middle, response;

  while (start <= end) {
    middle = parseInt((start + end) / 2);

    if (isNumberBlocksLessThanK(arr, middle, arr.length, k)) {
      response = middle;
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return response;
}

const arr = [2, 1, 5, 1, 2, 2, 2];
const response = solution(3, 5, arr);
console.log(response);
