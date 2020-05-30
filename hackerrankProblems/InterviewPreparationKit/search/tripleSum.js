// https://www.hackerrank.com/challenges/triple-sum
function tripleSum(arrA, arrB, arrC) {
  arrA = [...new Set(arrA)].sort((a, b) => a - b);
  arrB = [...new Set(arrB)].sort((a, b) => a - b);
  arrC = [...new Set(arrC)].sort((a, b) => a - b);

  const lenA = arrA.length;
  const lenB = arrB.length;
  const lenC = arrC.length;

  let a = 0;
  let c = 0;
  let sum = 0;

  for (let b = 0; b < lenB; b++) {
    while (a < lenA && arrA[a] <= arrB[b])
      a++;
    while (c < lenC && arrC[c] <= arrB[b])
      c++;

    sum += a * c;
  }

  return sum;
}

function main(input) {
  let currentLine = 0;
  
  const [lenA, lenB, lenC] = input[currentLine++].split(' ').map(Number);
  const a = input[currentLine++].split(' ').map(Number);
  const b = input[currentLine++].split(' ').map(Number);
  const c = input[currentLine++].split(' ').map(Number);

  console.log(tripleSum(a, b, c));
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  return main(processedInput);
}

processInput(`3 3 3
1 4 5
2 3 3
1 2 3`)
