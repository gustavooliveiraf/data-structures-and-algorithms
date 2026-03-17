class Solution {
  backtracking(board, word, wordIndex, i, j, directions) {
    if (wordIndex == word.length) {
      return true;
    }
    if (i < 0 || j < 0 || i == board.length || j == board[i].length || board[i][j] == null || board[i][j] != word[wordIndex]) {
      return false;
    }

    board[i][j] = null;
    for (let [x, y] of directions) {
      const xx = i + x, yy = j + y;
      if (this.backtracking(board, word, wordIndex + 1, xx, yy, directions)) {
        return true;
      }
    }
    board[i][j] = word[wordIndex];

    return false;
  }

  /**
   * @param {character[][]} board
   * @param {string} word
   * @return {boolean}
   */
  exist(board, word) {
    const directions = [[1, 0], [0, 1], [0, -1], [-1, 0]];

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === word[0]) {
          if (this.backtracking(board, word, 0, i, j, directions)) {
            return true;
          }
        }
      }
    }

    return false;
  }
}

const board = [
  ["A","B","C","D"],
  ["S","A","A","T"],
  ["A","C","A","E"]
];
const word = "CAT";
console.log(new Solution().exist(board, word));
