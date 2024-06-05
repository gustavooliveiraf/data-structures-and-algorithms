class Solution {
  rowBinarySearch(matrix, target) {
    let l = 0, r = matrix.length - 1;
    while (l <= r) {
      const mid = (l + r) >> 1;
      if (target > matrix[mid][0]) {
        l = mid + 1;
      } else if (target < matrix[mid][0]) {
        r = mid - 1;
      } else {
        return mid;
      }
    }

    if (r === -1) {
      return null;
    }
    
    return l - 1;
  }

  colBinarySearch(matrix, target) {
    let l = 0, r = matrix.length - 1;
    while (l <= r) {
      const mid = (l + r) >> 1;

      if (target > matrix[mid]) {
        l = mid + 1;
      } else if (target < matrix[mid]) {
        r = mid - 1;
      } else {
        return true;
      }
    }

    return false;
  }
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    const row = this.rowBinarySearch(matrix, target);
    
    return row === null ? false : this.colBinarySearch(matrix[row],  target);
  }
}

const matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10;
console.log(new Solution().searchMatrix(matrix, target));
