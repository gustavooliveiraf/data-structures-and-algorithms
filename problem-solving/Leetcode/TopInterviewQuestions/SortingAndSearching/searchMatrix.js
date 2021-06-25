// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/806/
var searchMatrix = function(matrix, target) {
  let i = 0, j = matrix[0].length - 1;
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] > target) j--;
    else if (matrix[i][j] < target) i++;
    else return true;
  }

  return false;
};

const matrix = [[-1,3]], target = 3;
console.log(searchMatrix(matrix, target));
