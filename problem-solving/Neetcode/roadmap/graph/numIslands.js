class Solution {
  dfs(grid, i, j, directions) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') {
      return;
    }

    grid[i][j] = '0';

    for (const [x, y] of directions) {
      this.dfs(grid, i + x, j + y, directions);
    }
  }

  /**
   * @param {character[][]} grid
   * @return {number}
   */
  numIslands(grid) {
    let islandCounter = 0;
    const directions = [
      [1, 0],
      [-1, 0],
      [0, -1],
      [0, 1]
    ];

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === '1') {
          this.dfs(grid, i, j, directions);
          islandCounter++;
        }
      }
    }

    return islandCounter;
  }
}

const grid = [
  ['0','1','1','0','1'],
  ['1','0','1','0','1'],
  ['0','1','1','0','1'],
  ['0','1','0','0','1']
];
console.log(new Solution().numIslands(grid));
