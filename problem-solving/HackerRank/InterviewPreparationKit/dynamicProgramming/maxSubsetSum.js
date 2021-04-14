// https://www.hackerrank.com/challenges/max-array-sum
// RangeError: Maximum call stack size exceeded
// let arr, mem;
// function maxSubsetSum(i) {
//   if (mem[i] !== undefined)
//     return mem[i];
  
//   return mem[i] = Math.max(arr[i], arr[i] + maxSubsetSum(i + 2), maxSubsetSum(i + 1));
// }
function maxSubsetSum(arr, n) {
  let mem = new Array(n);

  let currMax = Math.max(arr[0], arr[1]);
  mem[0] = arr[0];
  mem[1] = currMax;

  for (let i = 2; i < n; i++)
    mem[i] = currMax = Math.max(arr[i], arr[i] + mem[i - 2], currMax);

  return mem[n - 1];
}

function main(input) {
  let currentLine = 0;

  const n = Number(input[currentLine++]);
  const arr = input[currentLine].split(' ').map(Number);

  console.log(maxSubsetSum(arr, n));
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  main(processedInput);
}

processInput(`5
3 7 4 6 5`)
