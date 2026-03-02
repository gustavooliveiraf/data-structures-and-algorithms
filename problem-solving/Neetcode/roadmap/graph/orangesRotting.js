class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  orangesRotting(grid) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const n = grid.length, m = grid[0].length;
    const queue = new Array();
    let globalMinutes = 0;
    let freshFruits = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j  < m; j++) {
        if (grid[i][j] === 2) {
          queue.push([i, j, 0]);
        } else if (grid[i][j] === 1) {
          freshFruits++;
        }
      }
    }

    while(queue.length > 0) {
      let [i, j, logcalMinutes] = queue.shift();
      if (grid[i][j] === 1) {
        freshFruits--;
      }

      grid[i][j] = 0;
      globalMinutes = logcalMinutes;

      for (let [x, y] of directions) {
        const nextI = i + x;
        const nextJ = j + y;
        if (nextI >= 0 && nextJ >= 0 && nextI < n && nextJ < m && grid[nextI][nextJ] === 1) {
          queue.push([nextI, nextJ, logcalMinutes + 1]);
        }
      }
    }

    return freshFruits === 0 ? globalMinutes : -1;
  }
}

const grid = [
  [2,1,0],
  [0,1,1],
  [0,1,1]
];
console.log(new Solution().orangesRotting(grid));
