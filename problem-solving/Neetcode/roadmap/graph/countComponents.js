class Graph {
  constructor(n, edges) {
    this.adjList = Array.from({ length: n }, () => new Array());
    this.addEdges(edges);
  }

  addEdges(edges) {
    for (let i = 0; i <  edges.length; i++) {
      const [u, v] = edges[i];
      this.adjList[u].push(v);
      this.adjList[v].push(u);
    }
  }
}

class Solution {
  dfs(adjList, visited, index) {
    visited[index] = true;

    for (const v of adjList[index]) {
      if (!visited[v]) {
        this.dfs(adjList, visited, v);
      }
    }
  }

  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    const graph    = new Graph(n, edges);
    const visited  = new Array(n).fill(false);
    let components = 0;

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        this.dfs(graph.adjList, visited, i);
        components++;
      }
    }

    return components;
  }
}

const n = 5, edges = [[0,1],[1,2],[3,4]];
console.log(new Solution().countComponents(n, edges));
