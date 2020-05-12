class GraphNode {
  constructor(index, weight = 6) {
    this.index = index;
    this.weight = weight;
  }
}

class Graph {
  constructor(size) {
    this.adjList = new Array(size);
    for (let i = 0; i < size; i++) this.adjList[i] = new Array();
  }

  addEdge(src, dest, weight) {
    const node1 = new GraphNode(src, weight);
    const node2 = new GraphNode(dest, weight);

    this.adjList[src].push(node2)
    this.adjList[dest].push(node1)
  }
}
