// https://www.hackerrank.com/challenges/unbounded-knapsack/problem
let mem;

function knapsack(list, i, k) {
  if (mem[i][k] !== undefined)
    return mem[i][k];

  if (list[i] > k)
    return mem[i][k] = knapsack(list, i + 1, k);

  return mem[i][k] = Math.max(knapsack(list, i + 1, k),
    list[i] + knapsack(list, i, k - list[i]));
}

function buildArrayMemorization(n, c) {
  mem = new Array(n + 1).fill(null);
  mem.forEach((elem, index) => mem[index] = new Array(c + 1))
  mem[n].fill(0);
}

function main(processedInput) {
  let currentLine = 0;

  const cases = Number(processedInput[currentLine++]);
  for (let i = 0; i < cases; i++) {
    const [n, k] = processedInput[currentLine++].split(' ').map(Number);

    const list = processedInput[currentLine++].split(' ').map(Number);

    buildArrayMemorization(n, k);
    console.log(knapsack(list, 0, k));
  }
}

function processInput(input) {
  const processedInput = input.split('\n');

  return main(processedInput);
}

processInput(`2
3 12
1 6 9
5 9
3 4 4 4 8`);
