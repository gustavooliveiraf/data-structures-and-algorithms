class GraphNode {
  constructor(index, price) {
    this.index = index;
    this.price = price;
  }
}

class Graph {
  constructor(n, flights) {
    this.adjList = Array.from({ length: n }, () => new Array());
    this.init(flights);
  }

  init(flights) {
    for (const [src, dest, price] of flights) {
      this.adjList[src].push(new GraphNode(dest, price));
    }
  }
}

class Solution {
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
