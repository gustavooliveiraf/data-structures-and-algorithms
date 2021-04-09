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

const arr = [1,2,3,4];
console.log(binarySearch(arr, 1));
