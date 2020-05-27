// https://www.hackerrank.com/challenges/count-triplets-1
function countTripletsRatioEqualsOne(map, ratio) {
  let count = map.values();
  let sum = 0;

  let value = count.next().value;
  while (value) {
    if (value >= 3)
      sum += (value * (value - 1) * (value - 2)) / (3 * 2 * 1); // C(n 3)

    value = count.next().value;
  }

  return sum;
}

function countTriplets(list, length, ratio) {
  const left = new Map();
  const right = new Map();
  let sum = 0;

  for (let i = 0; i < length; i++) {
    const value = right.has(list[i]) ? (right.get(list[i]) + 1) : 1;
    right.set(list[i], value);
  }

  if (ratio === 1)
    return countTripletsRatioEqualsOne(right, ratio);

  for (let i = 0; i < length; i++) {
    const cur = list[i];
    let l = 0, r = 0;

    if (cur % ratio === 0)
      l = left.get(cur / ratio) || 0;
    r = right.get(cur * ratio) || 0;

    sum += l * r;

    let temp = right.get(cur) - 1;
    right.set(cur, temp);
    temp = left.has(cur) ? (left.get(cur) + 1) : 1;
    left.set(cur, temp);
  }

  return sum;
}

function main(processedInput) {
  let currentLine = 0;

  const [n, r] = processedInput[currentLine++].split(' ').map(Number);
  const list = processedInput[currentLine++].split(' ').map(Number);

  console.log(countTriplets(list, n, r));
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  return main(processedInput);
}

processInput(`6 3
1 3 9 9 27 81`);
