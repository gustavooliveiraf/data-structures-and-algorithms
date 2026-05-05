// https://leetcode.com/problems/find-eventual-safe-states/description/
function isCyclic(adjList, globalVisited, localVisited, localIndex) {
  if (localVisited[localIndex]) {
    return true;
  }
  if (globalVisited[localIndex] ) {
    return false;
  }

  localVisited[localIndex] = true;
  globalVisited[localIndex] = true;
  
  for (const i of adjList[localIndex]) {
    if (isCyclic(adjList, globalVisited, localVisited, i)) {
      return true;
    }
  }

  localVisited[localIndex] = false;
  return false;
}

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  const res = new Array;
  const localVisited = new Array(graph.length).fill(false), globalVisited = new Array(graph.length).fill(false);

  for (let i = 0; i < graph.length; i++) {
    isCyclic(graph, globalVisited, localVisited, i);
  }

  for (let i = 0; i < graph.length; i++) {
    if (!localVisited[i]) {
      res.push(i);
    }
  }

  return res;
};

const graph = [[1,2],[2,3],[5],[0],[5],[],[]];
console.log(eventualSafeNodes(graph));
