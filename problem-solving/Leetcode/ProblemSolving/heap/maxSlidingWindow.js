// https://leetcode.com/problems/sliding-window-maximum/
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

  parent(i) { return parseInt((i-1)/2); }

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

    let greatest = (l < this.size() && this.heap[l].weight > this.heap[i].weight) ? l : i;
    if (r < this.size() && this.heap[r].weight > this.heap[greatest].weight) greatest = r;
  
    if (greatest !== i) {
      [this.heap[i], this.heap[greatest]] = [this.heap[greatest], this.heap[i]];
      this.minHeapify(greatest);
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
    if (this.empty()) return null;

    const node = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.minHeapify(0);

    return node;
  }

  top() {
    return this.heap[0];
  }
}

var maxSlidingWindow = function(nums, k) {
  const output = new Array();
  const heap = new Heap();

  for (let index = 0; index < k; index++) {
    heap.push(index, nums[index]);
  }

  output.push(heap.top().weight);
  for (let index = k; index < nums.length; index++) {
    while (heap.size() && heap.top().index <= index - k) {
      heap.pop();
    }

    heap.push(index, nums[index]);

    output.push(heap.top().weight);
  }

  return heap;
};

const nums = [4,3,11], k = 3;
console.log(maxSlidingWindow(nums, k));
