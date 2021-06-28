// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/
var setZeroes = function(matrix) {
  let colZeroContainZero = false;
  const rows = matrix.length, columns = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) colZeroContainZero = true;

    for (let j = 1; j < columns; j++)
      if (matrix[i][j] === 0)
        matrix[i][0] = matrix[0][j] = 0;
  }

  for (let i = 1; i < rows; i++)
    for (let j = 1; j < columns; j++)
      if (matrix[i][0] === 0 || matrix[0][j] === 0)
        matrix[i][j] = 0;

  if (matrix[0][0] === 0) matrix[0].fill(0);
  
  if (colZeroContainZero)
    for (let i = 0; i < rows; i++)
      matrix[i][0] = 0;

  return matrix;
};

const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(setZeroes(matrix));
