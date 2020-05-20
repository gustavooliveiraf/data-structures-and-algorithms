// https://www.hackerrank.com/challenges/subset-sum/problem
let count;
let mem;

function subset(list, i, qttElem, s) {
  if (mem[i][s] !== undefined) return mem[i][s];

  if (i === list.length || s === 0)
    return mem[i][s] = Infinity;
  if (list[i] >= s)
    return mem[i][s] = qttElem + 1;

  const temp2 = subset(list, i + 1, qttElem + 1, s - list[i]);
  const temp1 = subset(list, i + 1, qttElem, s);

  count++;
  return mem[i][s] = Math.min(temp1, temp2);
}

function buildArrayMemorization(n, c) {
  count = 0;
  mem = new Array(n + 1).fill(null);
  mem.forEach((elem, index) => mem[index] = new Array(c + 1))
  mem[n].fill(Infinity);
}

function main(processedInput) {
  let index = 0;
  const list = new Array();

  const n = processedInput[index++];
  for (let i = 0; i < n; i++) list.push(processedInput[index++]);

  const cases = processedInput[index++];
  for (let i = 0; i < cases; i++) {
    const input = processedInput[index++];
    buildArrayMemorization(list.length, input);
    console.log(subset(list, 0, 0, input));
    console.log('--> ', count)
  }
}

function processInput(input) {
  const processedInput = input.replace(/\n/g, ' ').split(' ').map(elem => parseInt(elem));

  return main(processedInput);
}

processInput(`8
6 8 10 12 13 14 15 16
4
4
13
30
100`);
