class HeapNode {
  constructor(index, weight) {
    this.index = index;
    this.weight = weight;
  }
}

class Heap {
  constructor(heap = []) {
    this.heap = heap;
    this.buildHeap();
  }

  parent(i) { return parseInt((i-1)/2); }

  left(i) { return 2 * i + 1; }

  right(i) { return 2 * i + 2 }

  size() {
    return this.heap.length;
  }

  empty() {
    return this.size() === 0;
  }

  heapify(i) {
    const l = this.left(i);
    const r = this.right(i);

    let greatest = (l < this.size() && this.heap[l].weight > this.heap[i].weight) ? l : i;
    if (r < this.size() && this.heap[r].weight > this.heap[greatest].weight) greatest = r;
  
    if (greatest !== i) {
      [this.heap[i], this.heap[greatest]] = [this.heap[greatest], this.heap[i]];
      this.heapify(greatest);
    }
  }

  push(index, weight) {
    const node = new HeapNode(index, weight);
    this.heap.push(node);
    
    let i = this.size() - 1;
    while (i !== 0 && this.heap[this.parent(i)].weight < this.heap[i].weight) {
      [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
      i = this.parent(i);
    }
  }

  pop() {
    const node = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.heapify(0);

    return node;
  }

  top() {
    return this.heap[0];
  }

  buildHeap() {
    for (let i = this.size() >> 1; i >= 0; i--)
      this.heapify(i);
  }
}

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const kNodes = new Array(k - 1).fill(null).map((_, index) => new HeapNode(index, nums[index]))
    const heap = new Heap(kNodes);
    const res = new Array();

    for (let i = k - 1; i < nums.length; i++) {
      while (!heap.empty() && heap.top().index <= i - k) {
        heap.pop();
      }

      heap.push(i, nums[i]);
      res.push(heap.top().weight);
    }

    return res;
  }
}

const nums=[1,-1], k = 1;
console.log(new Solution().maxSlidingWindow(nums, k));
