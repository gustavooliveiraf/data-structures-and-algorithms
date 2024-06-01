class Solution {
  dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return 0;
    } else if (grid[i][j] === 0) {
      return 0;
    }

    grid[i][j] = 0;

    return 1 +
      this.dfs(grid, i + 1, j) +
      this.dfs(grid, i - 1, j) +
      this.dfs(grid, i, j + 1) +
      this.dfs(grid, i, j - 1);
  }

  /**
   * @param {number[][]} grid
   * @return {number}
   */
  maxAreaOfIsland(grid) {
    let maximumArea = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 1) {
          const maximumLocal = this.dfs(grid, i, j);
          maximumArea = Math.max(maximumArea, maximumLocal);
        }
      }
    }

    return maximumArea;
  }
}

const grid = [
  [0,1,1,0,1],
  [1,0,1,0,1],
  [0,1,1,0,1],
  [0,1,0,0,1]
];
console.log(new Solution().maxAreaOfIsland(grid));
