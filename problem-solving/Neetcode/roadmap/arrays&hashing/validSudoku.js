class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const cols = new Array(9).fill(null).map(_ => new Set());
    const rows = new Array(9).fill(null).map(_ => new Set());
    const squares = new Array(3).fill(null).map(_ => new Array(3).fill(null).map(_ => new Set()))

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const num = board[i][j];
        if (num === '.') {
          continue;
        }
        if (rows[i].has(num) || cols[j].has(num) || squares[parseInt(i / 3)][parseInt(j / 3)].has(num)) {
          return false;
        }

        rows[i].add(num);
        cols[j].add(num);
        squares[parseInt(i / 3)][parseInt(j / 3)].add(num);
      }
    }

    return true;
  }
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
console.log(new Solution().isValidSudoku(board));
