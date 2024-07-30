// https://leetcode.com/problems/valid-sudoku/submissions/1332320239/
function isRepeatedOptimized(rows, cols, squares, num, i, j) {
  const baseLin = parseInt(i / 3), baseCol = parseInt(j / 3);
  if (rows[i].has(num) || cols[j].has(num) || squares[baseLin][baseCol].has(num)) {
    return true;
  }

  rows[i].add(num);
  cols[j].add(num);
  squares[baseLin][baseCol].add(num);

  return false;
}

function isRepeated(board, lin, col) {
  for (let i = 0; i < 9; i++) {
    const isLinRepeated = i !== lin && board[i][col] === board[lin][col];
    const isColRepeated = i !== col && board[lin][i] === board[lin][col];
    if (isLinRepeated || isColRepeated) {
      return true
    }
  }

  const baseLin = parseInt(lin / 3) * 3, baseCol = parseInt(col / 3) * 3;
  for (let i = baseLin; i < baseLin + 3; i++) {
    for (let j = baseCol; j < baseCol + 3; j++) {
      if (i === lin && j === col) {
        continue;
      }
      if (board[i][j] === board[lin][col]) {
        return true;
      }
    }
  }

  return false;
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = new Array(9).fill(null).map(_ => new Set());
  const cols = new Array(9).fill(null).map(_ => new Set());
  const squares = new Array(3).fill(null).map(_ => new Array(3).fill(null).map(_ => new Set()))

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // if (board[i][j] !== '.' && isRepeated(board, i, j)) {
      if (board[i][j] !== '.' && isRepeatedOptimized(rows, cols, squares, board[i][j], i, j)) {
        return false;
      }
    }
  }

  return true;
}

const board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board));
