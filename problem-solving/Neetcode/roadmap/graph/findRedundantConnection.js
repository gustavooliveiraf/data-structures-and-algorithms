class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, index) => index);
    this.rank   = new Array(n).fill(0);
  }

  findSet(x) {
    if (this.parent[x] === x) {
      return x;
    }

    return this.parent[x] = this.findSet(this.parent[x]);
  }

  union(x, y) {
    const xRoot = this.findSet(x);
    const yRoot = this.findSet(y);

    if (xRoot === yRoot) {
      return false;
    }

    if (this.rank[xRoot] < this.rank[yRoot]) {
      this.parent[xRoot] = yRoot;
    } else {
      this.parent[yRoot] = xRoot;
    }
    
    if (this.rank[xRoot] === this.rank[yRoot]) {
      this.rank[xRoot]++;
    }

    return true;
  }
}

class Solution {
  /**
   * @param {number[][]} edges
   * @return {number[]}
   */
  findRedundantConnection(edges) {
    const n = edges.reduce((acc, [a, b]) => Math.max(a, b, acc), -1);
    const disjointSet = new DisjointSet(n + 1);
    let result;

    for (let i = 0; i < edges.length; i++) {
      const [u, v] = edges[i];

      if (!disjointSet.union(u, v)) {
        result = [u, v];
      }
    }

    return result;
  }
}

// const edges = [[1,2],[1,3],[3,4],[2,4]];
const edges = [[1,2],[1,3],[1,4],[3,4],[4,5]];
console.log(new Solution().findRedundantConnection(edges));
