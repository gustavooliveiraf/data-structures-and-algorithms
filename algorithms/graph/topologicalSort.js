class Graph {
  constructor(numCourses, prerequisites) {
    this.adjList = Array.from({ length: numCourses }, () => new Array());
    this.addEdges(prerequisites);
  }

  addEdges(prerequisites) {
    for (let i = 0; i < prerequisites.length; i++) {
      const [dest, src] = prerequisites[i];
      this.adjList[src].push(dest);
    }
  }
}

class TopologicalSort {
  topologicalSort(adjList, localIndex, globalVisited, localVisited, stack) {
    if (localVisited[localIndex]) {
      return true;
    }
    if (globalVisited[localIndex]) {
      return false;
    }

    localVisited[localIndex]  = true;
    globalVisited[localIndex] = true;

    for (const i of adjList[localIndex]) {
      if (this.topologicalSort(adjList, i, globalVisited, localVisited, stack)) {
        return true;
      }
    }

    stack.push(localIndex);
    localVisited[localIndex] = false;

    return false;
  }

  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {number[]}
   */
  findOrder(numCourses, prerequisites) {
    const graph = new Graph(numCourses, prerequisites);
    const stack = new Array();
    const globalVisited = new Array(numCourses).fill(false);
    const localVisited  = new Array(numCourses).fill(false);

    for (let i = 0; i < numCourses; i++) {
      if (!globalVisited[i] && this.topologicalSort(graph.adjList, i, globalVisited, localVisited, stack)) {
        return 'It is impossible to determine Topological Sort.';
      }
    }

    return stack.reverse();
  }
}

// const numCourses = 3, prerequisites = [[0,1],[1,2],[2,0]];
const numCourses = 3, prerequisites = [[1,0]];
console.log(new TopologicalSort().findOrder(numCourses, prerequisites));
