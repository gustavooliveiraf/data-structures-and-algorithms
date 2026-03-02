class Graph {
  constructor(numCourses, prerequisites) {
    this.adjList = new Array(numCourses);
    this.init(numCourses);
    this.addEdges(prerequisites);
  }

  init(n) {
    for (let i = 0; i < n; i++) {
      this.adjList[i] = new Array();
    }
  }

  addEdges(prerequisites) {
    for (let i = 0; i < prerequisites.length; i++) {
      const [a, b] = prerequisites[i];
      this.adjList[a].push(b);
    }
  }
}

class Solution {
  isCyclic(adjList, globalVisited, localVisited, localIndex) {
    if (localVisited[localIndex]) {
      return true;
    }
    if (globalVisited[localIndex] ) {
      return false;
    }

    localVisited[localIndex] = true;
    globalVisited[localIndex] = true;
    
    for (const i of adjList[localIndex]) {
      if (this.isCyclic(adjList, globalVisited, localVisited, i)) {
        return true;
      }
    }

    localVisited[localIndex] = false;
    return false;
  }

  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {boolean}
   */
  canFinish(numCourses, prerequisites) {
    const globalVisited = new Array(numCourses).fill(false);
    const localVisited = new Array(numCourses).fill(false);
    const graph = new Graph(numCourses, prerequisites);

    for (let i = 0; i < numCourses; i++) {
      if (!globalVisited[i] && this.isCyclic(graph.adjList, globalVisited, localVisited, i)) {
        return false;
      }
    }

    return true;
  }
}

const numCourses = 2, prerequisites = [[0,1],[1,0]];
console.log(new Solution().canFinish(numCourses, prerequisites));
