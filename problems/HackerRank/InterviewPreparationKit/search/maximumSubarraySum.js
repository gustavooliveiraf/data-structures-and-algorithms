// https://www.hackerrank.com/challenges/maximum-subarray-sum
// https://www.quora.com/What-is-the-logic-used-in-the-HackerRank-Maximise-Sum-problem
function maximumSubarraySum(data, modulo) {
  const prefix = [[-1, 0]];
  let maxSum = 0;

  for (let i = 0; i < data.length; i++) {
    prefix.push([i, (prefix[i][1] + data[i]) % modulo]);
    maxSum = Math.max(prefix[prefix.length-1][1], maxSum);
  }

  prefix.sort((a, b) => a[1] - b[1]);

  const { length } = prefix;
  for (let i = 1; i < length; i++) {
    const [origIndex, curSum] = prefix[i];

    let j = i + 1;
    while (j < length && (prefix[j][0] >= origIndex || prefix[j][1] == curSum))
      j++;

    if (j < length)
      maxSum = Math.max(curSum - prefix[j][1] + modulo, maxSum);
  }

  return maxSum;
}

function main(input) {
  let currentLine = 0;
  const cases = Number(input[currentLine++]);

  for (let i = 0; i < cases; i++) {
    const [n, m] = input[currentLine++].split(' ').map(Number);
    const arr = input[currentLine++].split(' ').map(Number);

    console.log(maximumSubarraySum(arr, n, m));
  }
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  main(processedInput);
}

processInput(`1
5 7
3 3 9 9 5`);
