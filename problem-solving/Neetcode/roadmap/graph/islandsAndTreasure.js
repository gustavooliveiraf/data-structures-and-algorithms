class Solution {
  /**
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    const n = grid.length, m = grid[0].length
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]

    const queue   = new Array();
    const visited = new Array();

    for (let i = 0; i < grid.length; i++) {
      visited[i] = new Array();
      for (let j = 0; j < grid[i].length; j++) {
        visited[i][j] = false;
        if (grid[i][j] === 0) {
          queue.push([i, j, 0]);
        }
      }
    }

    while(queue.length > 0) {
      const [i, j, distance] = queue.shift();

      if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === -1 || visited[i][j] === true) {
        continue;
      }

      visited[i][j] = true;

      if (grid[i][j] === 2147483647) {
        grid[i][j] = distance;
      }

      for (let [x, y] of directions) {
        if (grid[i][j] !== -1) {
          queue.push([i + x, j + y, distance + 1]);
        }
      }
    }

    return grid;
  }
}

const input = [
  [2147483647,        -1,         0,2147483647],
  [2147483647,2147483647,2147483647,        -1],
  [2147483647,        -1,2147483647,        -1],
  [         0,        -1,2147483647,2147483647]
];
console.log(new Solution().islandsAndTreasure(input));
