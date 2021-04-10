// https://www.hackerrank.com/challenges/coin-change
let mem;

function coinChange(list, i, units) {
  if (units < 0) return 0;
  if (mem[i][units] !== undefined) return mem[i][units];

  if (units === 0)
    return 1;
  if (list[i] > units)
    return mem[i][units] = coinChange(list, i + 1, units);

  return mem[i][units] = coinChange(list, i, units - list[i]) + coinChange(list, i + 1, units);
}

function buildArrayMemorization(m, n) {
  mem = new Array(m + 1).fill(null);
  mem.forEach((elem, index) => mem[index] = new Array(n + 1))
  mem[m].fill(0);
}

function main(processedInput) {
  let currentLine = 0;
  const [n, m] = processedInput[currentLine++].split(' ').map(Number);
  const list = processedInput[currentLine].split(' ').map(Number);
  buildArrayMemorization(m, n);
  console.log(coinChange(list, 0, n));
}

function processInput(input) {
  const processedInput = input.split('\n');

  return main(processedInput);
}

processInput(`10 4
2 5 3 6`);
