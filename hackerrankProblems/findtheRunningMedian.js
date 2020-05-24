// https://www.hackerrank.com/challenges/find-the-running-median/problem
const swap = (a, i, j) => {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

class Heap {
  constructor(compare) {
    this.heap = new Array(0);
    this.compare = compare === 'minHeap' ? this.min : this.max;
  }

  parent(i) { return parseInt((i - 1) / 2); }

  left(i) { return 2 * i + 1; }

  right(i) { return 2 * i + 2; }

  size() {
    return this.heap.length;
  }

  min(a, b) {
    return a < b;
  }

  max(a, b) {
    return a > b
  }

  push(weight) {
    this.heap.push(weight);
    
    let i = this.heap.length - 1;
    while (i !== 0 && this.compare(this.heap[i], this.heap[this.parent(i)])) {
      swap(this.heap, i, this.parent(i))
      i = this.parent(i);
    }
  }

  popAndPush(i) {
    const temp = this.heap[0];

    this.heap[0] = i;
    this.heapify(0);

    return temp;
  }

  heapify(i) {
    const l = this.left(i);
    const r = l + 1;

    let smallest = (l < this.heap.length && this.compare(this.heap[l], this.heap[i])) ? l : i;
    if (r < this.heap.length && this.compare(this.heap[r], this.heap[smallest])) smallest = r;
  
    if (smallest !== i) {
      swap(this.heap, i, smallest);
      this.heapify(smallest);
    }
  }
}

function print(minHeap, maxHeap) {
  if (minHeap.size() > maxHeap.size())
    console.log(minHeap.heap[0].toFixed(1));
  else if ((minHeap.size() < maxHeap.size()))
    console.log(maxHeap.heap[0].toFixed(1));
  else
    console.log(((minHeap.heap[0] + maxHeap.heap[0]) / 2).toFixed(1));
}

function runningMedian(a) {
  const minHeap = new Heap('minHeap');
  const maxHeap = new Heap('maxHeap');

  for (let i = 1; i <= a[0]; i++) {
    if (minHeap.size() > maxHeap.size()) {
      if (a[i] > minHeap.heap[0]) {
        const temp = minHeap.popAndPush(a[i]);
        maxHeap.push(temp);
      } else {
        maxHeap.push(a[i]);
      }
    } else if (maxHeap.size() > minHeap.size()) {
      if (a[i] < maxHeap.heap[0]) {
        const temp = maxHeap.popAndPush(a[i]);
        minHeap.push(temp);
      } else {
        minHeap.push(a[i]);
      }
    } else {
      if (a[i] < maxHeap.heap[0]) {
        maxHeap.push(a[i]);
      } else {
        minHeap.push(a[i]);
      }
    }

    print(minHeap, maxHeap);
  }
}

function main(input) {
  const processedInput = input.replace(/\n/g, ' ').split(' ').map(elem => parseInt(elem));

  return runningMedian(processedInput);
}

main(`6
12
4
5
3
8
7`)
