let mem, sum;
let n;

function loopSum(arr, index) {
  let count = 0;
  for (let i = index; i < n; i++) count += arr[i];

  return mem[index] = count;
}

function bricksGame(arr, i, turn_1) {
  if (i >= (n - 3) && !turn_1) return 0;
  if (i >= (n - 3)) return loopSum(arr, i)

  let count = arr[i];
  const remove_1 = bricksGame(arr, i + 1, !turn_1) + (turn_1 ? count : 0);
  count += arr[i + 1]
  const remove_2 = bricksGame(arr, i + 2, !turn_1) + (turn_1 ? count : 0);
  count += arr[i + 2];
  const remove_3 = bricksGame(arr, i + 3, !turn_1) + (turn_1 ? count : 0);

  return Math.max(remove_1, remove_2, remove_3);
}

function main(input) {
  let index = 0;

  const cases = Number(input[index++]);
  for (let i = 0; i < cases; i++) {
    n = Number(input[index++]);
    const arr = input[index++].trim().split(' ').map(Number);
    mem = new Array(n + 1);
    mem[n] = 0;

    console.log(bricksGame(arr, 0, true));
  }
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  return main(processedInput);
}

processInput(`1
5
0 1 1 1 999`)
