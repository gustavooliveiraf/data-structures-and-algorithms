// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/800/
class Heap {
  constructor() {
    this.heap = new Array();
  }

  parent(i) { return (i - 1) >> 1; }

  size() { return this.heap.length; }

  isEmpty() { return this.size() === 0; }

  top() { return !this.isEmpty() ? this.heap[0] : null; }

  push(data) {
    this.heap.push(data);

    let i = this.size() - 1;
    while (i >= 0 && this.heap[i] < this.heap[this.parent(i)]) {
      [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
      i = this.parent(i);
    }
  }

  pop() {
    if (this.size() === 0) return null;

    const top = this.top();
    this.size() > 1 ? this.heap[0] = this.heap.pop() : this.heap.pop();
    this.heapify(0);

    return top;
  }

  heapify(i) {
    const left = 2 * i + 1;
    const right = left + 1;

    let comp = (left < this.size() && this.heap[left] < this.heap[i]) ? left : i;
    if (right < this.size() && this.heap[right] < this.heap[comp]) comp = right;

    if (comp !== i) {
      [this.heap[i], this.heap[comp]] = [this.heap[comp], this.heap[i]];
      this.heapify(comp);
    }
  }
}

var findKthLargest = function(nums, k) {
  const heap = new Heap();

  nums.forEach(num => {
    if (heap.size() < k) {
      heap.push(num);
    } else {
      if (num > heap.top()) {
        heap.pop();
        heap.push(num);
      }
    }
  })

  return heap.top();
};

const nums = [3,2,1,5,6,4], k = 2;
console.log(findKthLargest(nums, k));
