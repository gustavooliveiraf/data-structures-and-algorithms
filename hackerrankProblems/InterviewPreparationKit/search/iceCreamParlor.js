// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem
function print(index_1, index_2) {
  console.log([index_1, index_2].sort((a, b) => a - b).join(' '));
}

function iceCreamParlor(cost, length, sum) {
  const map = new Map();
  const frequency = new Array(length).fill(1);
  for (let i = 0; i < length; i++) {
    const exist = map.get(cost[i]);
    if (!exist)
      map.set(cost[i], i + 1);
    else
      frequency[exist - 1] = i + 1;
  }

  for (let i = 0; i < length; i++) {
    const index_1 = map.get(sum - cost[i]);
    if (index_1) {
      if (sum != 2 * cost[i]) {
        const index_2 = map.get(cost[i]);
        if (index_1 != index_2)
          return print(index_1, index_2);
        else
          return print(index_1, frequency[i]);
      }
      if (frequency[i] > 1)
        return print(index_1, frequency[i]);
    }
  }
}

function main(input) {
  let currentLine = 0;
  const cases = (input[currentLine++]);

  for (let i = 0; i < cases; i++) {
    const sum = input[currentLine++];
    const length = input[currentLine++];
    const cost = input[currentLine++].split(' ').map(Number);

    iceCreamParlor(cost, length, sum);
  }
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  return main(processedInput);
}

processInput(`2
4
5
1 4 5 3 2
4
4
2 2 4 3`)