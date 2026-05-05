// https://leetcode.com/problems/smallest-string-with-swaps/description/
class DisjointSet {
  constructor(n) {
    this.parent = new Array(n).fill(null).map((_, index) => index);
    this.rank   = new Array(n).fill(0);
  }

  find(i) {
    if (this.parent[i] !== i) {
      this.parent[i] = this.find(this.parent[i])
    }

    return this.parent[i];
  }

  union(i, j) {
    const parentI = this.find(i);
    const parentJ = this.find(j);

    if (parentI === parentJ) return false;

    if (this.rank[parentI] > this.rank[parentJ]) {
      this.parent[parentJ] = parentI;
    } else if (this.rank[parentI] < this.rank[parentJ]) {
      this.parent[parentI] = parentJ;
    } else {
      this.parent[parentJ] = parentI;
      this.rank[parentI]++;
    }

    return true;
  }
}

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  const dSet = new DisjointSet(s.length);
  const mapIndex = new Map();
  const mapChars = new Map();

  for (const [u, v] of pairs) {
    dSet.union(u, v);
  }

  for (let i = 0; i < s.length; i++) {
    const group = dSet.find(i);
    if (!mapIndex.has(group)) {
      mapIndex.set(group, new Array());
      mapChars.set(group, new Array());
    }

    mapIndex.get(group).push(i);
    mapChars.get(group).push(s[i]);
  }

  const res = new Array(s.length).fill('');

  for (const group of mapIndex.keys()) {
    const groupIndex = mapIndex.get(group).sort((a, b) => a - b);
    const groupChars = mapChars.get(group).sort();

    for (let i = 0; i < groupIndex.length; i++) {
      res[groupIndex[i]] = groupChars[i];
    }
  }

  return res.join('');
};

const s = "dcab", pairs = [[0,3],[1,2]];
console.log(smallestStringWithSwaps(s, pairs));
