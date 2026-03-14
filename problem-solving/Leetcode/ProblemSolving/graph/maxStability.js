class DisjointSet {
  constructor(v, parent = null, rank = null) {
    this.parent = parent || new Array(v).fill(0).map((_, index) => index);
    this.rank = rank || new Array(v).fill(0);
  }

  find(x) {
    if (x === this.parent[x]) {
      return x;
    }

    return this.parent[x] = this.find(this.parent[x]);
  }

  union(x, y) {
    const xParent = this.find(x);
    const yParent = this.find(y);

    if (xParent === yParent) {
      return false;
    }

    if (this.rank[xParent] > this.rank[yParent]) {
      this.parent[yParent] = xParent;
    } else if (this.rank[xParent] < this.rank[yParent]) {
      this.parent[xParent] = yParent;
    } else {
      this.rank[xParent]++;
      this.parent[yParent] = xParent;
    }

    return true;
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStability = function(n, edges, k) {
  const optionalEdges = new Array();
  const mustEdges = new Array();

  edges.forEach(([u, v, s, must]) =>
    must === 0 ? optionalEdges.push([u, v, s]) : mustEdges.push([u, v, s])
  );

  optionalEdges.sort((a, b) => b[2] - a[2]);

  const disjointSet = new DisjointSet(n);
  let mustMin = 2e5, edgesCount = 0;

  for (const [u, v, s] of mustEdges) {
    if (disjointSet.union(u, v)) {
      mustMin = Math.min(mustMin, s);
      edgesCount++;
    } else {
      return -1;
    }
  }

  if (edgesCount === n - 1) {
    return mustMin;
  }


  let l = 0, r = mustMin, res = -1;
  while (l <= r) {
    const mid = (l + r) >> 1;

    let localDisjointSet = new DisjointSet(n, disjointSet.parent.slice(), disjointSet.rank.slice());

    let localEdgesCount = edgesCount;
    let doubledCount = 0;

    for (const [u, v, s] of optionalEdges) {
      if (!localDisjointSet.union(u, v)) {
        continue;
      }

      if (s >= mid) {
        localEdgesCount++;
      } else if (doubledCount < k && s * 2 >= mid) {
        localEdgesCount++;
        doubledCount++;
      } else {
        break;
      }

      if (localEdgesCount === n - 1) {
        break;
      }
    }

    if (localEdgesCount === n - 1) {
      res = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return res;
};

const n = 3, edges = [[0,1,55839,0],[0,2,39867,0],[1,2,62840,0]], k = 1;
console.log(maxStability(n, edges, k));
