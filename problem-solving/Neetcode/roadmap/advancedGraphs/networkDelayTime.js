class HeapNode {
  constructor(index, time) {
    this.index = index;
    this.time  = time;
  }
}

class Heap {
  constructor() {
    this.heap = new Array();
  }

  heapify() {
    this.heap.sort((a, b) => b.time - a.time);
  }

  push(index, time) {
    this.heap.push(new HeapNode(index, time));
    this.heapify();
  }

  pop() {
    return this.heap.pop().index;
  }

  empty() {
    return this.heap.length === 0;
  }
}

class GraphNode {
  constructor(index, time) {
    this.index = index;
    this.time  = time;
  }
}

class Graph {
  constructor(size, edges) {
    this.adjList = Array.from({ length: size }, () => new Array());
    this.init(edges);
  }

  init(edges) {
    for (const [src, dest, time] of edges) {
      this.adjList[src].push(new GraphNode(dest, time));
    }
  }
}

class Solution {
  dijkstra(adjList, n, k) {
    const distance = new Array(n).fill(Infinity);
    const visited  = new Array(n).fill(false);
    const heap     = new Heap(n);

    distance[k] = 0;
    heap.push(k, 0);

    while (!heap.empty()) {
      const curIndex = heap.pop();
      if (visited[curIndex]) continue;

      visited[curIndex] = true;

      for (const { index, time } of adjList[curIndex]) {
        if (!visited[index] && distance[index] > distance[curIndex] + time) {
          distance[index] = distance[curIndex] + time;
          heap.push(index, distance[index]);
        }
      }
    }

    distance[0] = -Infinity;
    return distance;
  }

  /**
   * @param {number[][]} times
   * @param {number} n
   * @param {number} k
   * @return {number}
   */
  networkDelayTime(times, n, k) {
    const graph = new Graph(n + 1, times);

    const distance = this.dijkstra(graph.adjList, n + 1, k);

    const res = distance.reduce((acc, cur) => Math.max(acc, cur));
    return res !== Infinity ? res : -1;
  }
}

const times = [[1,2,1],[2,3,1],[1,4,4],[3,4,1]], n = 4, k = 1;
console.log(new Solution().networkDelayTime(times, n, k));
