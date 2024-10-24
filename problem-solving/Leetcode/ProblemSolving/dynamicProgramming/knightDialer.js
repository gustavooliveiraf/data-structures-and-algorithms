const moves = [ [4,6], [6,8], [7,9], [4,8], [0,3,9], [], [0,1,7], [2,6], [1,3], [2,4] ];
const memo = new Array(10).fill(null).map(_ => new Array(5000));
const mod = 10 ** 9 + 7;

function backtracking(cell, n) {
  if (n === 1) {
    return 1;
  } else if (memo[cell][n]) {
    return memo[cell][n];
  }

  let result = 0;
  for (let i of moves[cell]) {
    result = (result + backtracking(i, n - 1)) % mod;
  }

  return memo[cell][n] = result;
}

var knightDialer = function(n) {
  let result = 0;
  for (let cell = 0; cell < 10; cell++) {
    result = (result + backtracking(cell, n)) % mod;
  }

  return result;
};

const n = 3131;
console.log(knightDialer(n));
