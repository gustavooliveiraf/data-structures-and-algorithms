// https://www.hackerrank.com/challenges/jesse-and-cookies
class Heap {
  constructor(heap) {
    this.heap = heap;
    this.compare = this.min;
    this.buildHeap();
  }

  parent(i) { return parseInt((i - 1) / 2); }

  left(i) { return 2 * i + 1; }

  right(i) { return 2 * i + 2 }

  size() { return this.heap.length; }

  empty() { return this.size() === 0; }

  min(a, b) { return a < b; }

  top() { return this.heap[0]; }

  push(weight) {
    this.heap.push(weight);
    
    let i = this.size() - 1;
    while (i !== 0 && this.compare(this.heap[i], this.heap[this.parent(i)])) {
      [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
      i = this.parent(i);
    }
  }

  pop() {
    if (this.empty()) return null;

    const temp = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.heapify(0);

    return temp;
  }

  heapify(i, heapSize = this.size()) {
    const l = this.left(i);
    const r = this.right(i);

    let comp = (l < heapSize && this.compare(this.heap[l], this.heap[i])) ? l : i;
    if (r < heapSize && this.compare(this.heap[r], this.heap[comp])) comp = r;
  
    if (comp !== i) {
      [this.heap[i], this.heap[comp]] = [this.heap[comp], this.heap[i]];
      this.heapify(comp, heapSize);
    }
  }

  buildHeap() {
    for (let i = parseInt(this.size() / 2); i >= 0; i--)
      this.heapify(i);
  }
}

function cookiesHeap(k, A) {
  const heap = new Heap(A);
  let count = 0;

  while (heap.top() < k && heap.size() > 1) {
    const smallestValue = heap.pop();
    const secondSmallestValue = heap.pop();
    const newValue = smallestValue + 2 * secondSmallestValue;
    heap.push(newValue);

    count++;
  }

  return heap.top() >= k ? count : -1;
}

console.log(cookiesHeap(9, [2, 7, 3, 6, 4, 6]));
console.log(cookiesHeap(10, [1, 1, 1]));
