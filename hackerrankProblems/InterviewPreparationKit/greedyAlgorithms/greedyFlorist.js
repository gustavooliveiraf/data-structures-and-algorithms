// https://www.hackerrank.com/challenges/greedy-florist
function greedyFlorist(arr, n, k) {
  let sum = 0;
  let round = 0;
  let kCount = k;

  for (let i = n - 1; i >= 0; i--) {
    sum += arr[i] * (round + 1);
    kCount--;
    if (kCount === 0) {
      round++;
      kCount = k;
    }
  }

  return sum;
}

function main(input) {
  let currentLine = 0;

  const [n, k] = input[currentLine++].split(' ').map(Number);
  const arr = input[currentLine].split(' ').map(Number).sort((a, b) => a - b);

  console.log(greedyFlorist(arr, n, k));
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  main(processedInput);
}

processInput(`5 3
1 3 5 7 9`);