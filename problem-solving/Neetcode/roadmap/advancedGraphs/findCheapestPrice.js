class Heap {
  constructor() {
    this.arr = new Array();
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  push(src, stop, price) {
    this.arr.push([src, stop, price]);
    this.arr.sort((a, b) => b[2] - a[2]);
  }

  pop() {
    return this.arr.pop();
  }
}

class GraphNode {
  constructor(dest, price) {
    this.dest  = dest;
    this.price = price;
  }
}

class Graph {
  constructor(n, flights) {
    this.adjList;
    this.init(n, flights);
  }

  init(n, flights) {
    this.adjList = Array.from({ length: n }, () => new Array());
    for (const [src, dest, price] of flights) {
      this.adjList[src].push(new GraphNode(dest, price));
    }
  }
}

class Solution {
  dijkstra(adjList, n, srcArg, dstArg, k) {
    const heap = new Heap();
    const dist = Array.from({ length: n }, () => new Array(k + 2).fill(Infinity));

    heap.push(srcArg, -1, 0);
    dist[srcArg][0] = 0;

    while(!heap.isEmpty()) {
      const [src, stop, srcPrice] = heap.pop();
      if (src === dstArg) {
        return srcPrice;
      }
      if (stop === k || dist[src][stop + 1] < srcPrice) continue;

      for (const { dest, price } of adjList[src]) {
        const nextPrice = srcPrice + price;
        const nextStop  = stop + 1;

        if (dist[dest][nextStop + 1] > nextPrice) {
          dist[dest][nextStop + 1] = nextPrice;
          heap.push(dest, nextStop, nextPrice);
        }
      }
    }

    return -1;
  }

  /**
   * @param {number} n
   * @param {number[][]} flights
   * @param {number} src
   * @param {number} dst
   * @param {number} k
   * @return {number}
   */
  findCheapestPrice(n, flights, src, dst, k) {
    const { adjList } = new Graph(n, flights);

    return this.dijkstra(adjList, n, src, dst, k);
  }
}

class GraphBFSNode {
  constructor(index, price) {
    this.index = index;
    this.price = price;
  }
}

class GraphBFS {
  constructor(n, flights) {
    this.adjList = Array.from({ length: n }, () => new Array());
    this.init(flights);
  }

  init(flights) {
    for (const [src, dest, price] of flights) {
      this.adjList[src].push(new GraphBFSNode(dest, price));
    }
  }
}

class SolutionBFS {
  /**
   * @param {number} n
   * @param {number[][]} flights
   * @param {number} src
   * @param {number} dst
   * @param {number} k
   * @return {number}
   */
  findCheapestPrice(n, flights, src, dst, k) {
    const { adjList } = new GraphBFS(n, flights);
    const queue = new Array();
    const prices = new Array(n).fill(Infinity);

    queue.push([src, 0, 0]);

    while(queue.length > 0) {
      const [prevIndex, stops, prevPrice] = queue.shift();
      if (stops > k) continue;

      for (const { index, price } of adjList[prevIndex]) {
        if (prevPrice + price < prices[index]) {
          prices[index] = prevPrice + price;
          queue.push([index, stops + 1, prevPrice + price]);
        }
      }
    }

    return prices[dst] !== Infinity ? prices[dst] : -1;
  }
}

const n = 3, flights = [[1,0,100],[1,2,200],[0,2,100]], src = 1, dst = 2, k = 1;
console.log(new Solution().findCheapestPrice(n, flights, src, dst, k));
