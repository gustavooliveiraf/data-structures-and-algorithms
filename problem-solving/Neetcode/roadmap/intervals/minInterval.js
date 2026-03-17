class Heap {
  constructor() {
    this.heap = new Array();
  }

  empty() {
    return this.heap.length === 0;
  }

  push (end, size) {
    this.heap.push([end, size]);
    this.heap.sort((a, b) => b[1] - a[1]);
  }

  pop() {
    return this.heap.pop();
  }

  top() {
    return this.heap.at(-1);  
  }
}

class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} queries
   * @return {number[]}
   */
  minInterval(intervals, queries) {
    intervals.sort((a, b) => a[0] - b[0]);
    const queriesIndexed = queries.map((query, index) => [query, index]).sort((a, b) => a[0] - b[0]);

    const res = new Array(queries.length);
    const heap = new Heap();
    let index = 0;

    for (const [query, queryIndex] of queriesIndexed) {
      while (index < intervals.length && intervals[index][0] <= query) {
        heap.push(intervals[index][1], intervals[index][1] - intervals[index][0] + 1);
        index++;
      }
      while (!heap.empty() && heap.top()[0] < query) {
        heap.pop();
      }

      res[queryIndex] = (!heap.empty() && heap.top()[1]) || -1;
    }

    return res;
  }
}

const intervals = [[1,3],[2,3],[3,7],[6,6]], queries = [2,3,1,7,6,8];
console.log(new Solution().minInterval(intervals, queries));
