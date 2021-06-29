// https://www.hackerrank.com/challenges/ctci-bubble-sort
function countSwaps(arr) {
  const n = arr.length;
  let swaps = 0;

  for (let i = 0; i < n; i++)
    for (let j = 0; j < n - 1; j++)
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaps++;
      }

  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log(`First Element: ${arr[0]}`);
  console.log(`Last Element: ${arr.pop()}`);
}

const arr = [6, 4, 1];
countSwaps(arr)
