// https://leetcode.com/problems/word-search/description/
function search(board, word, i, j, pointer, path) {
  if (i === board.length || i < 0 || j === board[0].length || j < 0) {
    return false;
  }
  if (board[i][j] !== word[pointer] || path[i][j] !== null) {
    return false;
  }
  if (word.length === pointer + 1) {
    return true;
  }

  path[i][j] = true;
  const up = search(board, word, i - 1, j, pointer + 1, path);
  const right = search(board, word, i, j + 1, pointer + 1, path);
  const down = search(board, word, i + 1, j, pointer + 1, path);
  const left = search(board, word, i, j - 1, pointer + 1, path);
  path[i][j] = null;

  return up || right || down || left;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        const path = new Array(board.length).fill(null).map(_ => new Array(board[0].length).fill(null));
        if (search(board, word, i, j, 0, path)) {
          return true;
        }
        const a = 2;
      }
    }
  }

  return false;
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
console.log(exist(board, word));
