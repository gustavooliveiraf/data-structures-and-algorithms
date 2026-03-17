class Solution {
  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  combinationSum2(candidates, target, candSorted = candidates.sort((a, b) => a - b), index = 0, subarray = [], resSet = new Set(), res = []) {
    if (target === 0) {
      if (!resSet.has(subarray.join('-'))) {
        resSet.add(subarray.join('-'));
        res.push([...subarray]);
      }
      return;
    } else if (target < 0 || index === candidates.length) {
      return;
    }

    subarray.push(candSorted[index]);
    this.combinationSum2(candidates, target - candSorted[index], candSorted, index + 1, subarray, resSet, res);
    subarray.pop();
    this.combinationSum2(candidates, target, candSorted, index + 1, subarray, resSet, res);

    return res;
  }
}

const candidates = [9,2,2,4,6,1,5], target = 8;
console.log(new Solution().combinationSum2(candidates, target));
