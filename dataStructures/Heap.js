// https://www.thehuxley.com/problem/578
const swap = (a, i, j) => {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

class Heap {
  constructor(heap = []) {
    this.heap = heap;
    this.heapSize = this.heap.length;

    if (this.heapSize > 0) this.buildMinHeap();
  }

  parent(i) { return parseInt((i - 1) / 2); }

  left(i) { return 2 * i + 1; }

  right(i) { return 2 * i + 2 }

  push(weight) {
    this.heapSize++;
    this.heap.push(weight);
    
    let i = this.heapSize - 1;
    while (i !== 0 && this.heap[this.parent(i)] > this.heap[i]) {
      swap(this.heap, i, this.parent(i))
      i = this.parent(i);
    }
  }

  pop() {
    if (this.heapSize === 0) return null;

    const temp = this.heap[0];
    this.heap[0] = this.heap[--this.heapSize];
    this.heap.pop();
    this.maxHeapify(0);

    return temp;
  }

  maxHeapify(i, heapSize = this.heapSize) {
    const l = this.left(i);
    const r = this.right(i);

    let smallest = (l < heapSize && this.heap[l] > this.heap[i]) ? l : i;
    if (r < heapSize && this.heap[r] > this.heap[smallest]) smallest = r;
  
    if (smallest !== i) {
      swap(this.heap, i, smallest);
      this.maxHeapify(smallest, heapSize);
    }
  }

  buildMinHeap() {
    for (let i = parseInt(this.heapSize / 2); i >= 0; i--)
      this.maxHeapify(i);
  }
}

module.exports = Heap;
