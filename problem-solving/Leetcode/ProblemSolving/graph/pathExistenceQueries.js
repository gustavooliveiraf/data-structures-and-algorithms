// https://leetcode.com/problems/path-existence-queries-in-a-graph-i
class DisjoinSet {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, index) => index);
    this.rank = new Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] === x) {
      return x;
    }

    return this.parent[x] = this.find(this.parent[x]);
  }

  union(x, y) {
    const parentX = this.find(x);
    const parentY = this.find(y);

    if (parentX === parentY) return;

    if (this.rank[parentX] > this.rank[parentY]) {
      this.parent[parentY] = parentX;
    } else if (this.rank[parentX] < this.rank[parentY]) {
      this.parent[parentX] = parentY;
    } else {
      this.parent[parentX] = parentY;
      this.rank[parentY]++;
    }
  }
}

/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
  const set = new DisjoinSet(n);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] <= maxDiff) {
      set.union(i, i - 1);
    }
  }

  const res = new Array();
  for (const [i, j] of queries) {
    if (set.find(i) === set.find(j)) {
      res.push(true);
    } else {
      res.push(false);
    }
  }

  return res;
};

const n = 4, nums = [2,5,6,8], maxDiff = 2, queries = [[0,1],[0,2],[1,3],[2,3]];
console.log(pathExistenceQueries(n, nums, maxDiff, queries));
