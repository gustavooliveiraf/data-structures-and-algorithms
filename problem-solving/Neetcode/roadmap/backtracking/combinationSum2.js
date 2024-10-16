class Solution {
  constructor() {
    this.candidates;
    this.target;
    this.set = new Set();
    this.subset = new Array();
    this.result = new Array();
  }
  dfs(index, sum) {
    if (sum > this.target || index === this.candidates.length + 1) {
      return;
    } else if (sum === this.target) {
      const newSubset = [...this.subset];
      const newSubsetString = newSubset.join('-');
      if (!this.set.has(newSubsetString)) {
        this.set.add(newSubsetString)
        this.result.push(newSubset);
      }

      return;
    }

    this.subset.push(this.candidates[index]);
    this.dfs(index + 1, sum + this.candidates[index]);

    this.subset.pop();
    this.dfs(index + 1, sum);
  }
  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  combinationSum2(candidates, target) {
    this.candidates = candidates;
    candidates.sort((a, b) => a - b);
    this.target = target;
    this.dfs(0, 0);

    return this.result;
  }
}

const candidates = [1,2,3,4,5], target=7;
console.log(new Solution().combinationSum2(candidates, target));
