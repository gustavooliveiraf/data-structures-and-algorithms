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

  enqueue(item) {
    const temp = new QueueNode(item);
    
    if (this.rear === null) {
      this.front = this. rear = temp;
      return;
    }

    this.rear.next = temp;
    this.rear = temp;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const temp = this.front;
    this.front = temp.next;

    if (this.front === null) this.rear = null;

    return temp;
  }
}

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

  addEdge(fromNode, toNode) {
    const node1 = new GraphNode(fromNode);
    const node2 = new GraphNode(toNode);

    this.adjList[fromNode].push(node2)
    this.adjList[toNode].push(node1)
  }
}

const shortestDistances = (graph, s) => {
  const adjList = graph.adjList;
  const visited = new Array(adjList.length).fill(false);
  const distance= new Array(adjList.length).fill(-1);;
  const queue = new Queue();

  visited[s] = true;
  distance[s] = 0;
  queue.enqueue(s);

  while (!queue.isEmpty()) {
    const vertex = queue.dequeue().index;

    const { length } = graph.adjList[vertex];
    for (let i = 0; i < length; i++) {
      const { index, weight } = adjList[vertex][i];

      if (visited[index]) continue;

      visited[index] = true;
      distance[index] = distance[vertex] + weight;
      queue.enqueue(index);
    }
  }

  return distance;
}

function print(distance, s) {
  const { length } = distance;
  for (let i = 0; i < length; i++) {
    if (i !== s) {
      process.stdout.write(distance[i] + ' ');
    }
  }
  process.stdout.write('\n');
}

function main(input) {
  let index = 0;
  const queries = input[index++];

  for (let i = 0; i < queries; i++) {
    const n = input[index++];
    const m = input[index++];

    const graph = new Graph(n);
    for (let j = 0; j < m; j++) {
      graph.addEdge(--input[index], --input[index+1]);
      index += 2
    }

    const s = --input[index++];

    const output = shortestDistances(graph, s);
    
    print(output, s);
  }
}

function processData(input) {
  const processedInput = input.replace(/\n/g, ' ').split(' ').map(elem => parseInt(elem));

  main(processedInput);
}

processData(`2
4 2
1 2
1 3
1
3 1
2 3
2`);
