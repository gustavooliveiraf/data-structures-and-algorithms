// https://www.hackerrank.com/challenges/kruskalmstrsub

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

class Edge {
  constructor(src, dest, weight) {
    this.src = src;
    this.dest = dest;
    this.weight = weight;
  }
}

class Graph {
  constructor(v, e) {
    this.v = v;
    this.e = e;

    this.edges = new Array();
  }

  addEdge(src, dest, weight) {
    const edge = new Edge(src, dest, weight);

    this.edges.push(edge)
  }

  sort() {
    this.edges.sort((a, b) => a.weight - b.weight);

    return this.edges;
  }
}

function kruskal(graph) {
  const edges = graph.sort();

  const unionFind = new DisjointSet(graph.e);
  let totalWeight = 0;

  let e = 0;
  for (i = 0; e < graph.v - 1 && i < graph.e; i++) {
    const { src, dest, weight } = edges[i];

    const x = unionFind.find(src);
    const y = unionFind.find(dest);

    if (x !== y) {
      e++;
      totalWeight += weight;
      unionFind.union(x, y);
    }
  }

  return totalWeight;
}

function main(input) {
  let index = 0;

  const n = input[index++];
  const m = input[index++];

  const graph = new Graph(n, m);
  for (let j = 0; j < m; j++) {
    graph.addEdge(--input[index], --input[index+1], input[index+2]);
    index += 3
  }

  console.log(kruskal(graph));
}

function processInput(input) {
  const processedInput = input.replace(/\n/g, ' ').split(' ').map(elem => parseInt(elem));

  main(processedInput);
}

processInput(`5 7
1 2 20
1 3 50
1 4 70
1 5 90
2 3 30
3 4 40
4 5 60
`)
