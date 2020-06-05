// https://www.thehuxley.com/problem/578
const swap = (a, i, j) => {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

class Heap {
  constructor(heap = []) {
    this.heap = heap;

    if (!this.empty()) this.buildMaxHeap();
  }

  parent(i) { return parseInt((i - 1) / 2); }

  left(i) { return 2 * i + 1; }

  right(i) { return 2 * i + 2 }

  size() {
    return this.heap.length;
  }

  empty() {
    return this.size() === 0;
  }

  push(weight) {
    this.heap.push(weight);
    
    let i = this.size() - 1;
    while (i !== 0 && this.heap[this.parent(i)] > this.heap[i]) {
      swap(this.heap, i, this.parent(i))
      i = this.parent(i);
    }
  }

  pop() {
    if (this.empty()) return null;

    const temp = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.maxHeapify(0);

    return temp;
  }

  top() {
    return this.heap[0];
  }

  maxHeapify(i, heapSize = this.size()) {
    const l = this.left(i);
    const r = this.right(i);

    let smallest = (l < heapSize && this.heap[l] > this.heap[i]) ? l : i;
    if (r < heapSize && this.heap[r] > this.heap[smallest]) smallest = r;
  
    if (smallest !== i) {
      swap(this.heap, i, smallest);
      this.maxHeapify(smallest, heapSize);
    }
  }

  buildMaxHeap() {
    for (let i = parseInt(this.size() / 2); i >= 0; i--)
      this.maxHeapify(i);
  }
}

// ===== application: Heapsort =====
// https://www.thehuxley.com/problem/577

const heapSort = (array) => {
  const heap = new Heap(array);

  for (let i = heap.size() - 1, j = 1; i >= 1; i--, j++) {
    swap(array, 0, i);
    heap.maxHeapify(0, heap.size() - j);
  }

  return heap.heap;
}

console.log(heapSort([27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9]));
