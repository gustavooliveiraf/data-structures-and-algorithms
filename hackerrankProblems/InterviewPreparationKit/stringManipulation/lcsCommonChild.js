// https://www.hackerrank.com/challenges/common-child

// RangeError: Maximum call stack size exceeded
// let mem;
// function lcs(str_1, str_2, i, j) {
//   if (mem[i][j] != undefined)
//     return mem[i][j];
//   if (str_1[i] == str_2[j])
//     return mem[i][j] = 1 + lcs(str_1, str_2, i + 1, j + 1);
//   else
//     return mem[i][j] = Math.max(lcs(str_1, str_2, i, j + 1), lcs(str_1, str_2, i + 1, j));
// }

function lcs(str_1, str_2) {
  const { length } = str_1;
  let mem = new Array(length + 1).fill(null);
  mem.forEach((elem, index) => {
    mem[index] = new Array(length + 1);
    mem[index][0] = 0;
  });
  mem[0].fill(0);

  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= length; j++) {
      if (str_1[i - 1] == str_2[j - 1])
        mem[i][j] = mem[i - 1][j - 1] + 1;
      else
        mem[i][j] = Math.max(mem[i - 1][j], mem[i][j - 1]);
    }
  }

  return mem[length][length];
}

function main(input) {
  let currentLine = 0;
  const str_1 = input[currentLine++];
  const str_2 = input[currentLine++];
  const { length } = str_1;

  console.log(lcs(str_1, str_2));
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  main(processedInput);
}

processInput(`HARRY
SALLY 
`)
