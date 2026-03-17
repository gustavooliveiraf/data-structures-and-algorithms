class Solution {
  queensCanAttackEachOther(board, i, j) {
    for (let icur = i - 1; icur >= 0; icur--) {
      if (board[icur][j] == 'Q') return true;
    }
    for (let icur = i - 1, jcur = j - 1; icur >= 0 && jcur >= 0; icur--, jcur--) {
      if (board[icur][jcur] == 'Q') return true;
    }
    for (let icur = i - 1, jcur = j + 1; icur >= 0 && jcur < board.length; icur--, jcur++) {
      if (board[icur][jcur] == 'Q') return true;
    }

    return false;
  }

  /**
   * @param {number} n
   * @return {string[][]}
   */
  solveNQueens(
    n,
    board = Array.from({ length: n }, () => new Array(n).fill('.')),
    i = 0,
    res = []
  ) {
    if (i === n) {
      return res.push(board.map(row => row.join('')));
    }

    for (let j = 0; j < n; j++) {
      board[i][j] = 'Q';
      if (!this.queensCanAttackEachOther(board, i, j)) {
        this.solveNQueens(n, board, i + 1, res);
      }
      board[i][j] = '.'
    }

    return res;
  }
}

const n = 4;
console.log(new Solution().solveNQueens(n));
