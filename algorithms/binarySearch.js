function binarySearch(arr, x) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (arr[mid] === x) return mid;
    else if (arr[mid] > x) r = mid - 1;
    else l = mid + 1;
  }

  return -1;
}

function binarySearchLowerBound(arr, x) {
  let l = 0;
  let r = arr.length;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);

    if (x <= arr[mid]) r = mid;
    else l = mid + 1;
  }

  return l;
}

function binarySearchUpperBound(arr, x) {
  let l = 0;
  let r = arr.length;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);

    if (x >= arr[mid]) l = mid + 1;
    else r = mid;
  }

  return l;
}

const arr = [10, 10, 10, 20, 20, 20, 30, 30];
console.log(binarySearch(arr, 20));
console.log(binarySearchLowerBound(arr, 20));
console.log(binarySearchUpperBound(arr, 20));
