// https://www.hackerrank.com/challenges/components-in-graph
class DisjointSet {
  constructor(size) {
    this.parent = new Array(size);
    this.rank   = new Array(size);

    for (let i = 0; i < size; i++)
      this.makeSet(i);
  }

  makeSet(i) {
    this.parent[i] = i;
    this.rank[i]   = 0;
  }

  find(i) {
    if (this.parent[i] !== i)
      this.parent[i] = this.find(this.parent[i]);

    return this.parent[i];
  }

  union(x, y) {
    const xroot = this.find(x);
    const yroot = this.find(y);

    if (xroot === yroot) return;

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

function componentsInGraph(edges) {
  const length = 2 * edges.length + 1;
  const disjointSet = new DisjointSet(length);

  for (let i = 0; i < edges.length; i++) {
    const [vertex1, vertex2] = edges[i];
    disjointSet.union(vertex1, vertex2);
  }

  const componentSize = new Array(length).fill(0);
  for (let i = 1; i < length; i++) {
    const parent = disjointSet.find(i);
    componentSize[parent]++;
  }

  let smallest = Infinity, biggest = 0;
  for (let i = 1; i < length; i++) {
    const size = componentSize[i];
    if (size > 1) {
      if (size < smallest)
        smallest = size;
      if (size > biggest)
        biggest = size;
    }
  }

  return [smallest, biggest];
}

const edges = [
  [1, 6],
  [2, 7],
  [3, 8],
  [4, 9],
  [2, 6]
];
console.log(componentsInGraph(edges));
