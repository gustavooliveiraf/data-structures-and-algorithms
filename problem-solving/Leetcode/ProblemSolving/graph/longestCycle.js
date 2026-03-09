// https://leetcode.com/problems/longest-cycle-in-a-graph
function getCycle(edges, visited, path, i) {
  if (i === -1) {
    return -1;
  }
  if (visited[i]) {
    const firstIndex = path.findIndex(elem => elem === i);
    return firstIndex !== - 1 ? path.length - firstIndex : -1;
  }

  visited[i] = true;
  path.push(i);
  return getCycle(edges, visited, path, edges[i]);
}

/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
  const visited = new Array(edges.length).fill(false);
  let globalLongestCycle = -Infinity;

  for (let i = 0; i < edges.length; i++) {
    if (!visited[i]) {
      const localLongestCycle = getCycle(edges, visited, [], i);
      globalLongestCycle = Math.max(globalLongestCycle, localLongestCycle);
    }
  }

  return globalLongestCycle;
};

const edges = [-1,4,-1,2,0,4];
console.log(longestCycle(edges));
