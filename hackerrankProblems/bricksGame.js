// https://www.hackerrank.com/challenges/play-game

// let arr, mem, sum;
// function bricksGame(n) {
//   if (mem[n] !== undefined)
//     return mem[n]

//   return mem[n] = sum[n] - Math.min(bricksGame(n - 1), bricksGame(n - 2), bricksGame(n - 3))
// }

function bricksGame(arr, n) {
  if (n <= 3)
    return arr.reduce((a, b) => a + b);
  
  const mem = new Array(n);
  mem[0] = arr[0];
  mem[1] = mem[0] + arr[1];
  mem[2] = mem[1] + arr[2];

  let sum = mem[2];
  for (let i = 3; i < n; i++) {
      sum += arr[i];
      mem[i] = sum - Math.min(mem[i - 1], mem[i - 2], mem[i - 3]);
  }

  return mem[n - 1];
}

function main(input) {
  let currenteLine = 0;

  const cases = Number(input[currenteLine++]);
  for (let i = 0; i < cases; i++) {
    const n = Number(input[currenteLine++]);
    arr = input[currenteLine++].trim().split(' ').map(Number);

    console.log(bricksGame(arr.reverse(), n));
  }
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  return main(processedInput);
}

processInput(`2
5
999 1 1 1 0
5
0 1 1 1 999`)
