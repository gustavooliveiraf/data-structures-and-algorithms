// https://www.hackerrank.com/challenges/dijkstrashortreach/problem?h_r=internal-search

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
    this.heapSize = this.heap.length;
  }

  parent(i) { return parseInt((i-1)/2); }

  left(i) { return 2 * i + 1; }

  right(i) { return 2 * i + 2 }

  minHeapify(i) {
    const l = this.left(i);
    const r = this.right(i);

    let smallest = (l < this.heapSize && this.heap[l].weight < this.heap[i].weight) ? l : i;
    if (r < this.heapSize && this.heap[r].weight < this.heap[smallest].weight) smallest = r;
  
    if (smallest !== i) {
      swap(this.heap, i, smallest);
      this.minHeapify(smallest);
    }
  }

  push(index, weight) {
    const node = new HeapNode(index, weight);
    this.heapSize++;
    this.heap.push(node);
    
    let i = this.heapSize - 1;
    while (i !== 0 && this.heap[this.parent(i)].weight > this.heap[i].weight) {
      swap(this.heap, i, this.parent(i))
      i = this.parent(i);
    }
  }

  pop() {
    if (this.heapSize === 0) return null;

    const node = this.heap[0];
    this.heap[0] = this.heap[--this.heapSize];
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

const dijkstra = (graph, s) => {
  const adjList = graph.adjList;
  const marked = new Array(adjList.length).fill(false);
  const distance= new Array(adjList.length).fill(Infinity);
  const heap = new Heap();

  distance[s] = 0;
  heap.push(s, 0);

  while (heap.heapSize !== 0) {
    const vertex = heap.pop().index;

    if (marked[vertex] === true) continue;
    marked[vertex] = true;

    const { length } = graph.adjList[vertex];
    for (let i = 0; i < length; i++) {
      const { index, weight } = adjList[vertex][i];

      if (marked[index] === false && distance[index] > (distance[vertex] + weight)) {
        distance[index] = distance[vertex] + weight;
        heap.push(index, distance[index]);
      }
    }
  }

  return distance;
}

function print(distance, s) {
  const { length } = distance;
  for (let i = 0; i < length; i++) {
    if (i !== s) {
      if (distance[i] === Infinity) distance[i] = -1;
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
      graph.addEdge(--input[index], --input[index+1], input[index+2]);
      index += 3
    }

    const s = --input[index++];

    const output = dijkstra(graph, s);
    
    print(output, s)
  }
}

function processData(input) {
  const processedInput = input.replace(/\n/g, ' ').split(' ').map(elem => parseInt(elem));

  main(processedInput);
}

processData(`1
5 4
1 2 24
1 4 20
3 1 3
4 3 12
1`)
