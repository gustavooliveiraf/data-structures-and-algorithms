class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdge(u, v, val) {
    if (!this.adjList.has(u)) {
      this.adjList.set(u, new Array());
    }
    if (!this.adjList.has(v)) {
      this.adjList.set(v, new Array());
    }

    this.adjList.get(u).push([v, val]);
    this.adjList.get(v).push([u, 1/val]);
  }
}

function bfs(adjList, u, v) {
  const visited = new Set();
  const queue = new Array();

  queue.push([u, 1]);
  visited.add(u);

  while (queue.length > 0) {
    const [curNode, prevVal] = queue.shift();

    for (const [node, curVal] of adjList.get(curNode)) {
      if (node === v) {
        return prevVal * curVal;
      }

      if (visited.has(node)) continue;
      visited.add(node);

      queue.push([node, prevVal * curVal]);
    }
  }

  return -1;
}

class Solution {
  /**
   * @param {string[][]} equations
   * @param {number[]} values
   * @param {string[][]} queries
   * @return {number[]}
   */
  calcEquation(equations, values, queries) {
    const res = new Array();
    const graph = new Graph();

    for (let i = 0; i < equations.length; i++) {
      graph.addEdge(equations[i][0], equations[i][1], values[i]);
    }

    for (const [u, v] of queries) {
      if (!graph.adjList.has(u) || !graph.adjList.has(v)) {
        res.push(-1);
      } else if (u === v) {
        res.push(1);
      } else {
        res.push(bfs(graph.adjList, u, v));
      }
    }

    return res;
  }
}

const equations = [["a","b"],["b","c"],["ab","bc"]], values = [4.0,1.0,3.25], queries = [["a","c"],["b","a"],["c","c"],["ab","a"],["d","d"]];
console.log(new Solution().calcEquation(equations, values, queries));
