// https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/description/
function swapArraySlice(arr, start, end) {
  for (let i = end; i > start; i--) {
    arr[i] = arr[i - 1];
  }

  return end - start;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
  const size = grid.length;
  const zeros = new Array(size).fill(0);
  let minimumSteps = 0;

  for (let i = 0; i < size; i++) {
    for (let j = size - 1; j > 0; j--) {
      if (grid[i][j] === 0) {
        zeros[i]++;
      } else {
        break;
      }
    }
  }

  for (let i = 0; i < size; i++) {
    const minimumZeros = size  - 1 - i;
    if (zeros[i] >= minimumZeros) {
      continue;
    }

    let foundRequiredZeroes = false;
    for (let j = i + 1; j < size; j++) {
      if (zeros[j] >= minimumZeros) {
        foundRequiredZeroes = true;
        minimumSteps += swapArraySlice(zeros, i, j);
        break;
      }
    }

    if (!foundRequiredZeroes) {
      return -1;
    }
  }

  return minimumSteps;
};

const grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]
console.log(minSwaps(grid));
