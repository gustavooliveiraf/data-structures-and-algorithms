class Node {
    constructor(val = 0, neighbors = []) {
      this.val = val;
      this.neighbors = neighbors;
    }
}

class Solution {
  /**
   * @param {Node} node
   * @return {Node}
   */
  cloneGraph(node, adjMap = undefined) {
    if (!node) {
      return null;
    }
    if (adjMap === undefined) {
      adjMap = new Map();
    }

    const newNodeI = new Node(node.val);
    adjMap.set(node.val, newNodeI);

    for (let neighbor of node.neighbors) {
      if (!adjMap.get(neighbor.val)) {
        this.cloneGraph(neighbor, adjMap);
      }

      newNodeI.neighbors.push(adjMap.get(neighbor.val));
    }

    return newNodeI;
  }
}
