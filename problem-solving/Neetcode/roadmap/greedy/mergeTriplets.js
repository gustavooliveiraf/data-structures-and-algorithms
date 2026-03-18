class Solution {
  /**
   * @param {number[][]} triplets
   * @param {number[]} target
   * @return {boolean}
   */
  mergeTriplets(triplets, [a, b, c]) {
    let res = [-Infinity, -Infinity, -Infinity];
    for (const [ai, bi, ci] of triplets) {
      if (ai > a || bi > b || ci > c) continue;

      if (ai === a || bi === b || ci === c) {
        res = [Math.max(ai, res[0]), Math.max(bi, res[1]), Math.max(ci, res[2])];
      }

      if (res[0] === a && res[1] === b && res[2] === c) {
        return true;
      }
    }

    return false;
  }
}

const triplets = [[1,2,3],[7,1,1]], target = [7,2,3];
console.log(new Solution().mergeTriplets(triplets, target));
