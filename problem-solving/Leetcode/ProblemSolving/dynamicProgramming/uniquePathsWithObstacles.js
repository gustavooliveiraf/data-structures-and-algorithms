/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1 || obstacleGrid.at(-1).at(-1) === 1) {
    return 0;
  }

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = -1;
      }
    }
  }

  for (let i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 0) {
      obstacleGrid[i][0] = 1;
    } else {
      break;
    }
  }
  for (let i = 1; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === 0) {
      obstacleGrid[0][i] = 1;
    } else {
      break;
    }
  }

  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === - 1) continue;

      let acc = obstacleGrid[i - 1][j] !== -1 ? obstacleGrid[i - 1][j] : 0;
      acc += obstacleGrid[i][j - 1] !== -1 ? obstacleGrid[i][j - 1] : 0;
      obstacleGrid[i][j] = acc;
    }
  }

  console.log(obstacleGrid)

  return obstacleGrid.at(-1).at(-1) !== -1 ? obstacleGrid.at(-1).at(-1) : 0;
};

const obstacleGrid = [[0,1,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]];
console.log(uniquePathsWithObstacles(obstacleGrid));
