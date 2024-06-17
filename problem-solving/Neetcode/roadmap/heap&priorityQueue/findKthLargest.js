class Heap {
  constructor(array) {
    this.array = array;
    this.compare = this.max;

    if (!this.empty()) this.buildHeap();
  }

  parent(i) { return (i - 1) >> 1; }

  size() { return this.array.length; }

  empty() { return this.size() === 0; }

  max(a, b) { return a > b }

  top() { return this.array[0]; }

  push(weight) {
    this.array.push(weight);

    let i = this.size() - 1;
    while (i !== 0 && this.compare(this.array[i], this.array[this.parent(i)])) {
      [this.array[i], this.array[this.parent(i)]] = [this.array[this.parent(i)], this.array[i]];
      i = this.parent(i);
    }
  }

  pop() {
    if (this.empty()) return null;

    const temp = this.array[0];
    this.array[0] = this.array[this.size() - 1];
    this.array.pop();
    this.heapify(0);

    return temp;
  }

  heapify(i, heapSize = this.size()) {
    const left = 2 * i + 1;
    const right = left + 1;

    let comp = (left < heapSize && this.compare(this.array[left], this.array[i])) ? left : i;
    if (right < heapSize && this.compare(this.array[right], this.array[comp])) comp = right;
  
    if (comp !== i) {
      [this.array[i], this.array[comp]] = [this.array[comp], this.array[i]];
      this.heapify(comp, heapSize);
    }
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
   * @return {number}
   */
  findKthLargest(nums, k) {
    const heap = new Heap(nums);
    for (let i = 0; i < k - 1; i++) {
      heap.pop();
    }

    return heap.pop();
  }
}
