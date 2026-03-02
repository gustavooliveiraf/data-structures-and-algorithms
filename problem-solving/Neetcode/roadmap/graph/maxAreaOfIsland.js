class Solution {
  dfs(grid, i, j, directions) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) {
      return 0;
    }

    grid[i][j] = 0;

    let landLocalCounter = 0;
    for (const [x, y] of directions) {
      landLocalCounter += this.dfs(grid, i + x, j + y, directions);
    }

    return 1 + landLocalCounter;
  }

  /**
   * @param {number[][]} grid
   * @return {number}
   */
  maxAreaOfIsland(grid) {
    let landGlobalCounter = 0;
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1) {
          const landLocalCounter = this.dfs(grid, i, j, directions);
          landGlobalCounter = Math.max(landGlobalCounter, landLocalCounter);
        }
      }
    }

    return landGlobalCounter;
  }
}

const grid = [
  [0,1,1,0,1],
  [1,0,1,0,1],
  [0,1,1,0,1],
  [0,1,0,0,1]
];
console.log(new Solution().maxAreaOfIsland(grid));
