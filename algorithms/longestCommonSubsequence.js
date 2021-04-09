// https://www.hackerrank.com/challenges/dynamic-programming-classics-the-longest-common-subsequence
function lcs(str_1, str_2, n, m) {
  let mem = new Array(n + 1).fill(null);
  mem.forEach((elem, index) => {
    mem[index] = new Array(m + 1);
    mem[index][0] = 0;
  });
  mem[0].fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str_1[i - 1] == str_2[j - 1])
        mem[i][j] = mem[i - 1][j - 1] + 1;
      else
        mem[i][j] = Math.max(mem[i - 1][j], mem[i][j - 1]);
    }
  }

  let index = mem[n][m];
  const str = new Array(index);
  let i = n, j = m;
  while (i > 0 && j > 0 && index >= 0) {
    if (str_1[i - 1] == str_2[j - 1]) {
      str[--index] = str_1[i - 1];
      i--; j--;
    }
    else if (mem[i-1][j] > mem[i][j-1])
      i--;
    else
      j--;
  }

  return str.join(' ');
}

function main(input) {
  let currentLine = 0;
  const [n, m] = input[currentLine++].split(' ').map(Number);
  const str_1 = input[currentLine++].split(' ').map(Number);
  const str_2 = input[currentLine++].split(' ').map(Number);

  console.log(lcs(str_1, str_2, n, m));
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  main(processedInput);
}

processInput(`5 6
1 2 3 4 1
3 4 1 2 1 3`)
