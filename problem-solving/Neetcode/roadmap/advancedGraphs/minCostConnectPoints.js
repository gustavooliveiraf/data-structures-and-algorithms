class GraphNode {
  constructor(src, dest, distance) {
    this.src = src;
    this.dest = dest;
    this.distance = distance;
  }
}

class Graph {
  constructor() {
    this.edges = new Array();
  }

  addEdge(src, dest, distance) {
    this.edges.push(new GraphNode(src, dest, distance));
  }

  sortEdges() {
    this.edges.sort((a, b) => a.distance - b.distance);
  }
}

class DisjointSet {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank   = new Array(size).fill(0);
  }

  findSet(x) {
    if (x === this.parent[x]) {
      return x;
    }

    return this.parent[x] = this.findSet(this.parent[x]);
  }

  union(x, y) {
    const parentX = this.findSet(x);
    const parentY = this.findSet(y);

    if (parentX === parentY) {
      return false;
    }

    if (this.rank[parentX] < this.rank[parentY]) {
      this.parent[parentX] = parentY;
    } else if (this.rank[parentX] > this.rank[parentY]) {
      this.parent[parentY] = parentX;
    } else {
      this.parent[parentY] = parentX;
      this.rank[parentX]++;
    }

    return true;
  }
}

class Solution {
  kruskal(edges, numberOfPoints) {
    const disjointSet = new DisjointSet(numberOfPoints);
    let edgeCounter = 0, totalDistance = 0;

    for (let i = 0; i < edges.length && edgeCounter < numberOfPoints - 1; i++) {
      const { src, dest, distance } = edges[i];

      if (disjointSet.union(src, dest)) {
        totalDistance += distance;
        edgeCounter++;
      }
    }

    return totalDistance;
  }

  /**
   * @param {number[][]} points
   * @return {number}
   */
  minCostConnectPoints(points) {
    const graph = new Graph(points.length);

    for (let i = 0; i < points.length - 1; i++) {
      const [x, y] = points[i];
      for (let j = i + 1; j < points.length; j++) {
        const [xx, yy] = points[j];
        const distance = Math.abs(x - xx) + Math.abs(y - yy);

        graph.addEdge(i, j, distance);
      }
    }

    graph.sortEdges();

    return this.kruskal(graph.edges, points.length);
  }
}

const points = [[0,0],[2,2],[3,3],[2,4],[4,2]];
console.log(new Solution().minCostConnectPoints(points));
