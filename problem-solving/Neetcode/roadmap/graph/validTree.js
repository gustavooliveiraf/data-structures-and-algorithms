class Graph {
  constructor(n) {
    this.adjList = Array.from({ length: n }, () => new Array());
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
    this.adjList[v].push(u);
  }
}

function isCyclic(adjList, visited, curIndex, parentIndex) {
  visited.add(curIndex);

  for (const v of adjList[curIndex]) {
    if (!visited.has(v)) {
      if (isCyclic(adjList, visited, v, curIndex)) {
        return true;
      }
    } else if (v !== parentIndex) {
      return true;
    }
  }

  return false;
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
      const visited = new Set();
      const graph = new Graph(n);

      for (const [u, v] of edges) {
        graph.addEdge(u, v);
      }

      if (isCyclic(graph.adjList, visited, 0, -1)) {
        return false;
      }

      return visited.size === n;
    }
}

const n = 5, edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
console.log(new Solution().validTree(n, edges));
