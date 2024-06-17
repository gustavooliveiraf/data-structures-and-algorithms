const swap = (a, i, j) => {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

class HeapNode {
  constructor(coordinate, weight) {
    this.coordinate = coordinate;
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

    let smallest = (l < this.size() && this.heap[l].weight < this.heap[i].weight) ? l : i;
    if (r < this.size() && this.heap[r].weight < this.heap[smallest].weight) smallest = r;
  
    if (smallest !== i) {
      swap(this.heap, i, smallest);
      this.minHeapify(smallest);
    }
  }

  push(coordinate, weight) {
    const node = new HeapNode(coordinate, weight);
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

    return node.coordinate;
  }
}

class Solution {
  /**
   * @param {number[]} nums
   */
  kClosest(nums, k) {
    const heap = new Heap();
    nums.forEach(([x, y]) => heap.push([x, y], Math.sqrt(x ** 2 + y ** 2)));

    const result = new Array();
    for (let i = 0; i < k; i++) {
      result.push(heap.pop());
    }

    return result;
  }
}

const points = [[0,2],[2,0],[2,2]], k = 2;
console.log(new Solution().kClosest(points, k));
