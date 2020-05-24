// https://www.hackerrank.com/challenges/unbounded-knapsack/problem
let mem;

function knapsack(list, i, k) {
  if (mem[i][k] !== undefined) return mem[i][k];

  if (i === list.length)
    return mem[i][k] = 0;
  if (list[i] > k)
    return mem[i][k] = knapsack(list, i + 1, k);
  
  const temp1 = list[i] + knapsack(list, i, k - list[i]);
  const temp2 = knapsack(list, i + 1, k);

  return mem[i][k] = Math.max(temp1, temp2);
}

function buildArrayMemorization(n, c) {
  count = 0;
  mem = new Array(n + 1).fill(null);
  mem.forEach((elem, index) => mem[index] = new Array(c + 1))
  mem[n].fill(0);
}

function main(processedInput) {
  let index = 0;

  const cases = processedInput[index++];
  for (let i = 0; i < cases; i++) {
    const n = processedInput[index++];
    const k = processedInput[index++];

    const list = new Array();
    for (let j = 0; j < n; j++)
      list.push(processedInput[index++]);

    buildArrayMemorization(n, k);
    console.log(knapsack(list, 0, k));
  }
}

function processInput(input) {
  const processedInput = input.replace(/\n/g, ' ').split(' ').map(elem => parseInt(elem));

  return main(processedInput);
}

processInput(`2
3 12
1 6 9
5 9
3 4 4 4 8`);
