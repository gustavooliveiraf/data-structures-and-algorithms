class Solution {
  initQueue(board, n, m) {
    const queue = new Array();
    for (let i = 0; i < n; i++) {
      if (board[i][0] === 'O') {
        queue.push([i, 0]);
      }
      if (board[i][m - 1] === 'O') {
        queue.push([i, m - 1])
      }
    }
    for (let j = 1; j < m - 1; j++) {
      if (board[0][j] === 'O') {
        queue.push([0, j]);
      }
      if (board[n - 1][j] === 'O') {
        queue.push([n - 1, j]);
      }
    }

    return queue;
  }

  /**
   * @param {character[][]} board
   * @return {void} Do not return anything, modify board in-place instead.
   */
  solve(board) {
    const n = board.length, m = board[0].length;
    const queue = this.initQueue(board, n, m);
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];

    while(queue.length > 0) {
      const [i, j] = queue.shift();

      if (board[i][j] === 'O') {
        board[i][j] = 'o';
      }

      for (const [x, y] of directions) {
        const nextI = i + x;
        const nextJ = j + y;
        if (nextI >=0 && nextJ >= 0 && nextI < n && nextJ < m
          && board[nextI][nextJ] === 'O') {
            queue.push([nextI, nextJ]);
          }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 'o') {
          board[i][j] = 'O';
        } else if (board[i][j] === 'O') {
          board[i][j] = 'X';
        }
      }
    }

    return board;
  }
}

const grid = [
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
];
console.log(new Solution().solve(grid));
