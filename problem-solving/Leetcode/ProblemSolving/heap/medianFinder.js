// https://leetcode.com/problems/find-median-from-data-stream
class Heap {
  constructor(compare) {
    this.array = new Array();
    this.compare = compare === 'maxHeap' ? this.max : this.min;
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
}

var MedianFinder = function() {
  this.leftMaxHeap = new Heap('maxHeap');
  this.rightMinHeap = new Heap('minHeap');
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (num > this.leftMaxHeap.top()) {
    this.rightMinHeap.push(num);
    if (this.rightMinHeap.size() === this.leftMaxHeap.size() + 2) {
      this.leftMaxHeap.push(this.rightMinHeap.pop());
    }
  } else {
    this.leftMaxHeap.push(num);
    if (this.leftMaxHeap.size() === this.rightMinHeap.size() + 2) {
      this.rightMinHeap.push(this.leftMaxHeap.pop());
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let output;
  if (this.leftMaxHeap.size() === this.rightMinHeap.size()) {
    output = (this.leftMaxHeap.top() + this.rightMinHeap.top()) / 2;
  } else if (this.leftMaxHeap.size() > this.rightMinHeap.size()) {
    output = this.leftMaxHeap.top();
  } else {
    output = this.rightMinHeap.top();
  }

  return output;
};
