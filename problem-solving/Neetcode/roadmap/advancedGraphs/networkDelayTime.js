class Heap {
  constructor() {
    this.arr = new Array();
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  push(index, time) {
    this.arr.push([index, time]);
    this.arr.sort((a, b) => b[1] - a[1]); // O(nlogn), O(logn)
  }

  pop() {
    return this.arr.pop(); // O(logn)
  }
}

class GraphNode {
  constructor(target, time) {
    this.target = target;
    this.time = time;
  }
}

class Graph {
  constructor(n, times) {
    this.adjList;
    this.init(n, times);
  }

  init(n, times) {
    this.adjList = Array.from({ length: n + 1 }, () => new Array());
    for (const [src, target, time] of times) {
      this.adjList[src].push(new GraphNode(target, time));
    }
  }
}

class Solution {
  dijkstra(adjList, k, visited) {
    let res = 0;
    const heap = new Heap();
    heap.push(k, 0);

    while(!heap.isEmpty()) {
      const [index, curTime] = heap.pop();

      if (visited.has(index)) continue;
      visited.add(index);
      res = curTime;

      for (const { target, time } of adjList[index]) {
        heap.push(target, curTime + time);
      }
    }

    return res;
  }

  /**
   * @param {number[][]} times
   * @param {number} n
   * @param {number} k
   * @return {number}
   */
  networkDelayTime(times, n, k) {
    const { adjList } = new Graph(n, times);
    const visited = new Set();

    const time = this.dijkstra(adjList, k, visited);

    return visited.size === n ? time : -1;
  }
}

const times = [[1,2,1],[2,3,1],[1,4,4],[3,4,1]], n = 4, k = 1;
console.log(new Solution().networkDelayTime(times, n, k));
