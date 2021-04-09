// https://www.hackerrank.com/challenges/new-year-chaos
const tooChaotic = 'Too chaotic';

function minimumBribes(queue) {
  const { length } = queue;
  let count = 0;

  for (let i = length - 1; i >= 0; i--) {
    if ((queue[i]) - (i + 1) > 2) return tooChaotic;

    for (let j = Math.max(0, queue[i] - 2); j < i; j++)
      if (queue[j] > queue[i]) count++;
  }

  return count;
}

function main(processedInput) {
  let currentLine = 0;
  const t = Number(processedInput[currentLine++]);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = Number(processedInput[currentLine++]);

    const q = processedInput[currentLine++].split(' ').map(qTemp => Number(qTemp));

    console.log(minimumBribes(q));
  }
}

function processInput(input) {
  const processedInput = input.split('\n');

  return main(processedInput);
}

processInput(`1
8
1 2 5 3 7 8 6 4`);
