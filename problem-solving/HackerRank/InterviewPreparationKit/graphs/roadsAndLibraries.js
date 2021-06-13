// https://www.hackerrank.com/challenges/torque-and-development
class DisjointSet {
  constructor(size) {
    this.parent = new Array(size);
    this.rank   = new Array(size);
    this.makeSet(size);
  }

  makeSet(size) {
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i]   = 0;
    }
  }

  find(i) {
    if (this.parent[i] !== i)
      this.parent[i] = this.find(this.parent[i]);

    return this.parent[i];
  }

  union(x, y) {
    const xroot = this.find(x);
    const yroot = this.find(y);

    if(this.rank[xroot] > this.rank[yroot])
      this.parent[yroot] = xroot;
    else if(this.rank[xroot] < this.rank[yroot])
      this.parent[xroot] = yroot;
    else {
      this.parent[yroot] = xroot;
      this.rank[xroot]++;
    }
  }
}

function roadsAndLibraries(n, costLib, costRoad, edges) {
  const disjointSet = new DisjointSet(n + 1);
  const componentSize = (new Array(n + 1)).fill(0);
  let cost = 0;

  for (let i = 0; i < edges.length; i++) {
    const [vertex1, vertex2] = edges[i];
    disjointSet.union(vertex1, vertex2);
  }

  for (let i = 1; i <= n; i++) {
    const parent = disjointSet.find(i);
    componentSize[parent]++;
  }

  for (let i = 1; i <= n; i++)
    if (componentSize[i] !== 0)
      cost += costLib <= costRoad ? (componentSize[i] * costLib) : (costLib + costRoad * (componentSize[i] - 1));

  return cost;
}

const [n, m, costLib, costRoad] = [3, 3, 2, 1];
const edges = [[1, 2], [3, 1], [2, 3]];

console.log(roadsAndLibraries(n, costLib, costRoad, edges));
