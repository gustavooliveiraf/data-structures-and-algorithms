// https://www.hackerrank.com/challenges/play-game
let mem, n;

function loopSum(arr, index) {
  let count = 0;
  for (let i = index; i < n; i++) count += arr[i];

  return mem[index] = count;
}

function bricksGame(arr, i) {
  if (mem[i] !== undefined)
    return mem[i];
  if (i >= (n - 3))
    return mem[i] = loopSum(arr, i);

  let count = arr[i];
  const remove_1 = count + bricksGame(arr, i + 2);
  count += arr[i + 1]
  const remove_2 = count + bricksGame(arr, i + 3);
  count += arr[i + 2];
  const remove_3 = count + bricksGame(arr, i + 4);

  return mem[i] = Math.max(remove_1, remove_2, remove_3);
}

function main(input) {
  let index = 0;

  const cases = Number(input[index++]);
  for (let i = 0; i < cases; i++) {
    n = Number(input[index++]);
    const list = input[index++].trim().split(' ').map(Number);
    mem = new Array(n + 1);
    mem[n] = 0;

    console.log(bricksGame(list, 0));
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
