class Heap {
  constructor(compare = 'maxHeap', array = []) {
    this.array = array;
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

class MedianFinder {
    constructor() {
      this.minHeap = new Heap('minHeap');
      this.maxHeap = new Heap('maxHeap');
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
      if (num < this.minHeap.top()) {
        if (this.minHeap.size() >= this.maxHeap.size()) {
          return this.maxHeap.push(num);
        }
        this.minHeap.push(this.maxHeap.pop());
        return this.maxHeap.push(num);
      }

      if (this.maxHeap.size() >= this.minHeap.size()) {
        return this.minHeap.push(num);
      }
      this.maxHeap.push(this.minHeap.pop());
      return this.minHeap.push(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
      if (this.maxHeap.size() === this.minHeap.size()) {
        return (this.maxHeap.top() + this.minHeap.top()) / 2;
      } else if (this.maxHeap.size() < this.minHeap.size()) {
        return this.minHeap.top();
      } else {
        return this.maxHeap.top();
      }
    }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1);
console.log(medianFinder.findMedian());
medianFinder.addNum(3);
console.log(medianFinder.findMedian())
medianFinder.addNum(2);
console.log(medianFinder.findMedian());
