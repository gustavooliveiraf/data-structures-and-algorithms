// https://www.hackerrank.com/challenges/primsmstsub/problem
const swap = (a, i, j) => {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

class HeapNode {
  constructor(index, weight) {
    this.index = index;
    this.weight = weight;
  }
}

class Heap {
  constructor(heap = []) {
    this.heap = heap;
  }

  parent(i) { return parseInt((i - 1) / 2); }

  left(i) { return 2 * i + 1; }

  right(i) { return 2 * i + 2 }

  size() {
    return this.heap.length;
  }

  empty() {
    return this.size() === 0;
  }

  minHeapify(i) {
    const l = this.left(i);
    const r = this.right(i);

    let smallest = (l < this.size() && this.heap[l].weight < this.heap[i].weight) ? l : i;
    if (r < this.size() && this.heap[r].weight < this.heap[smallest].weight) smallest = r;
  
    if (smallest !== i) {
      swap(this.heap, i, smallest);
      this.minHeapify(smallest);
    }
  }

  push(index, weight) {
    const node = new HeapNode(index, weight);
    this.heap.push(node);
    
    let i = this.size() - 1;
    while (i !== 0 && this.heap[this.parent(i)].weight > this.heap[i].weight) {
      swap(this.heap, i, this.parent(i))
      i = this.parent(i);
    }
  }

  pop() {
    if (this.empty()) return null;

    const node = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.minHeapify(0);

    return node;
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

  addEdge(fromNode, toNode, weight) {
    const node1 = new GraphNode(fromNode, weight);
    const node2 = new GraphNode(toNode, weight);

    this.adjList[fromNode].push(node2)
    this.adjList[toNode].push(node1)
  }
}

const prim = (graph, s) => {
  const adjList = graph.adjList;
  const marked = new Array(adjList.length).fill(false);
  const distance= new Array(adjList.length).fill(Infinity);
  const heap = new Heap();
  let totalWeight = 0;

  distance[s] = 0;
  heap.push(s, 0);

  while (!heap.empty()) {
    const vertex = heap.pop().index;

    if (marked[vertex] === true) continue;
    marked[vertex] = true;
    totalWeight += distance[vertex];

    const { length } = graph.adjList[vertex];
    for (let i = 0; i < length; i++) {
      const { index, weight } = adjList[vertex][i];

      if (marked[index] === false && distance[index] > weight) {
        distance[index] = weight;
        heap.push(index, distance[index]);
      }
    }
  }

  return totalWeight;
}

function main(queries) {
  let index = 0;

  const n = queries[index++];
  const m = queries[index++];

  const graph = new Graph(n);
  for (let j = 0; j < m; j++) {
    graph.addEdge(--queries[index], --queries[index+1], queries[index+2]);
    index += 3;
  }

  const start = --queries[index];

  const output = prim(graph, start);

  process.stdout.write(output.toString());
}

function processInput(input) {
  const processedInput = input.trim().replace(/\n/g, ' ').split(' ').map(elem => parseInt(elem));

  main(processedInput);
}

processInput(`5 6
1 2 3
1 3 4
4 2 6
5 2 2
2 3 5
3 5 7
1`)
