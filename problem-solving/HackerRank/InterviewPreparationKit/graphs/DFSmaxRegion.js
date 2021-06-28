// https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid
function maxRegion(grid, rows, columns, cell) {
  const [x, y] = cell;

  if (x < 0 || y < 0 || x === rows || y === columns || grid[x][y] === 0)
    return 0;

  grid[x][y] = 0;

  let sum = 0;
  for (let iteratorX = x - 1; iteratorX <= x + 1; iteratorX++)
    for (let iteratorY = y - 1; iteratorY <= y + 1; iteratorY++)
      if (!(iteratorX === x && iteratorY === y))
        sum += maxRegion(grid, rows, columns, [iteratorX, iteratorY]);

  return 1 + sum;
}

function computeComponents(grid, rows, columns) {
  let largestRegion = 0
  for (let x = 0; x < rows; x++)
    for (let y = 0; y < columns; y++)
      if (grid[x][y] === 1) {
        const currentRegion = maxRegion(grid, rows, columns, [x, y]);
        if (currentRegion > largestRegion)
          largestRegion = currentRegion;
      }

  return largestRegion
}

const grid = [
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 0]
]
console.log(computeComponents(grid, 4, 4));
