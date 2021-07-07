// https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/792/
function bfs(grid, x, y) {
  if (x < 0 || y < 0 || x === grid.length || y === grid[0].length || grid[x][y] === '0') return;

  grid[x][y] = '0';

  bfs(grid, x - 1, y);
  bfs(grid, x, y + 1);
  bfs(grid, x + 1, y);
  bfs(grid, x, y - 1);
}

var numIslands = function(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++)
      if (grid[i][j] === '1') {
        count++;
        bfs(grid, i, j);
      }

  return count;
};

const grid = [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
];
console.log(numIslands(grid));
