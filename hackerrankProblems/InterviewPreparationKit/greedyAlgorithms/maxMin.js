// https://www.hackerrank.com/challenges/angry-children
function maxMin(arr, n, k) {
  k--;
  let max = arr[k] - arr[0];
  for (let i = k + 1; i < n; i++) {
    const maxLocal = arr[i] - arr[i - k];
    if (maxLocal < max)
      max = maxLocal;
  }

  return max;
}

function main(input) {
  let currentLine = 0;
  const n = Number(input[currentLine++]);
  const k = Number(input[currentLine++]);

  const arr = input.slice(2).map(Number).sort((a, b) => a - b);

  console.log(maxMin(arr, n, k));
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  main(processedInput);
}

processInput(`7
3
10
100
300
200
1000
20
30`)