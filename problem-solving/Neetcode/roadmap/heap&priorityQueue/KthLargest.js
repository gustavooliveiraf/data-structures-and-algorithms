class Heap {
  constructor() {
    this.array = new Array();
  }

  parent(i) { return (i - 1) >> 1; }

  size() { return this.array.length; }

  empty() { return this.size() === 0; }

  min(a, b) { return a < b; }

  max(a, b) { return a > b }

  top() { return this.array[0]; }

  push(weight) {
    this.array.push(weight);

    let i = this.size() - 1;
    while (i !== 0 && this.min(this.array[i], this.array[this.parent(i)])) {
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

    let comp = (left < heapSize && this.min(this.array[left], this.array[i])) ? left : i;
    if (right < heapSize && this.min(this.array[right], this.array[comp])) comp = right;
  
    if (comp !== i) {
      [this.array[i], this.array[comp]] = [this.array[comp], this.array[i]];
      this.heapify(comp, heapSize);
    }
  }
}

class KthLargest {
  constructor(nums, k) {
    this.heap = new Heap();
    for (let i = 0; i < k; i++) {
      this.heap.push(nums[i]);
    }

    for (let i = k; i < nums.length; i++) {
      if (nums[i] > this.heap.top()) {
        this.heap.pop();
        this.heap.push(nums[i]);
      }
    }
  }

  add(num) {
    if (num > this.heap.top()) {
      this.heap.pop();
      this.heap.push(num);
    }

    console.log(this.heap.top());
  }
}

const [k, nums] = [3, [1, 2, 3, 3]];
const kthLargest = new KthLargest(nums, k);
kthLargest.add(3);   // return 3
kthLargest.add(5);   // return 3
kthLargest.add(6);   // return 3
kthLargest.add(7);   // return 5
kthLargest.add(8);   // return 6
