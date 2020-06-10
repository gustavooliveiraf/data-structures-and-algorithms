// https://www.hackerrank.com/challenges/find-the-nearest-clone
class QueueNode {
  constructor(index) {
    this.index = index;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null;
  }

  push(item) {
    const temp = new QueueNode(item);
    
    if (this.rear === null) {
      this.front = this.rear = temp;
      return;
    }

    this.rear.next = temp;
    this.rear = temp;
  }

  pop() {
    if (this.isEmpty()) return null;

    const temp = this.front;
    this.front = temp.next;

    if (this.front === null) this.rear = null;

    return temp;
  }
}

class GraphNode {
  constructor(index) {
    this.index = index;
  }
}

class Graph {
  constructor(size) {
    this.adjList = new Array(size);
    for (let i = 0; i < size; i++) this.adjList[i] = new Array();
  }

  addEdge(fromNode, toNode) {
    const node1 = new GraphNode(fromNode);
    const node2 = new GraphNode(toNode);

    this.adjList[fromNode].push(node2)
    this.adjList[toNode].push(node1)
  }
}

const findTheNearestClone = (graph, start, colorsId, id) => {
  const adjList = graph.adjList;
  const visited = new Array(adjList.length).fill(-1);
  const distance= new Array(adjList.length).fill(0);;
  const queue = new Queue();

  for (let i = 0; i < start.length; i++) {
    queue.push(start[i]);
    visited[start[i]] = start[i];
  }

  while (!queue.isEmpty()) {
    const index = queue.pop().index;

    const { length } = graph.adjList[index];
    for (let i = 0; i < length; i++) {
      const { index: targetIndex } = adjList[index][i];

      if (index === targetIndex)
        continue;
      if (visited[targetIndex] !== -1 && visited[index] !== targetIndex)
        return distance[targetIndex] + distance[index] + 1

      visited[targetIndex] = index;
      distance[targetIndex] = distance[index] + 1;
      queue.push(targetIndex);
    }
  }

  return distance;
}

function main(input) {
  let currentLine = 0;

  const [n, m] = input[currentLine++].split(' ').map(Number);
  const graph = new Graph(n);
  for (let i = 0; i < m; i++) {
    let [v1, v2] = input[currentLine++].split(' ').map(Number);
    graph.addEdge(--v1, --v2);
  }

  const colorsId = input[currentLine++].split(' ').map(Number);
  const id = Number(input[currentLine]);

  const start = colorsId.reduce((acc, cur, index) => {
    if (cur === id)
      acc.push(index);
    return acc;
  }, []);

  if (start.length <= 1) {
    console.log(-1);
    return;
  }

  console.log(findTheNearestClone(graph, start, colorsId, id));
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  main(processedInput);
}

processInput(`5 4
1 2
1 3
2 4
3 5
1 2 3 3 2
2`);
