// https://www.hackerrank.com/challenges/crush
function arrayManipulation(list) {
  let sum = 0, max = 0;

  const { length } = list;
  for (let i = 0; i < length; i++) {
    sum += list[i];

    if (sum > max)
      max = sum;
  }

  return max;
}

function main(processedInput) {
  let currentLine = 0;

  const [n, m] = processedInput[currentLine++].split(' ').map(Number);
  let list = new Array(n + 2).fill(0);
  
  for (let i = 0; i < m; i++) {
    const [a, b, k] = processedInput[currentLine++].split(' ').map(Number);
    list[a] += k;
    list[b+1] -= k;
  }

  console.log(arrayManipulation(list));
}

function processInput(input) {
  const processedInput = input.split('\n');

  return main(processedInput);
}

processInput(`5 3
1 2 100
2 5 100
3 4 100`);
