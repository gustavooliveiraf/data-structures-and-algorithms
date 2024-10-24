// https://leetcode.com/problems/pascals-triangle
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const pascalTriangle = new Array();
  for (let row = 0; row < numRows; row++) {
    const thisRow = new Array(row + 1);
    thisRow[0] = thisRow[row] = 1;

    for (let i = 1; i < row; i++) {
      thisRow[i] = pascalTriangle[row-1][i-1] + pascalTriangle[row-1][i];
    }

    pascalTriangle.push(thisRow);
  }

  return pascalTriangle;
};

var generateRecursive = function(numRows) {
  if (numRows === 1) {
    return [[1]];
  }
  let pascalTriangle = generate(numRows - 1);

  const thisRow = new Array(numRows);
  thisRow[0] = thisRow[numRows - 1] = 1;

  numRows--;
  for (let i = 1; i < numRows; i++) {
    thisRow[i] = pascalTriangle[numRows - 1][i - 1] + pascalTriangle[numRows - 1][i];
  }

  pascalTriangle.push(thisRow);

  return pascalTriangle;
};

const numRows = 5;
console.log(generate(numRows));
