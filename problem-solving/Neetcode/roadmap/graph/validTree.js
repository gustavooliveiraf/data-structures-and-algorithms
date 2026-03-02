class Graph {
  constructor(n, edges) {
    this.adjList = Array.from({ length: n }, () => new Array());
    this.addEdges(edges);
  }

  addEdges(edges) {
    for (let i = 0; i < edges.length; i++) {
      const [u, v] = edges[i];
      this.adjList[u].push(v);
      this.adjList[v].push(u);
    }
  }
}

class Solution {
  isCyclic(adjList, visited, curIndex, parentIndex) {
    visited[curIndex] = true;

    for (const v of adjList[curIndex]) {
      if (!visited[v]) {
        if (this.isCyclic(adjList, visited, v, curIndex)) {
          return true;
        }
      } else if (v !== parentIndex) {
        return true;
      }
    }

    return false;
  }

  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n, edges) {
    const graph   = new Graph(n, edges);
    const visited = new Array(n).fill(false);

    if (this.isCyclic(graph.adjList, visited, 0, -1)) {
      return false;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i] === false) {
        return false;
      }
    }

    return true;
  }
}

const n = 5, edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
console.log(new Solution().validTree(n, edges));
