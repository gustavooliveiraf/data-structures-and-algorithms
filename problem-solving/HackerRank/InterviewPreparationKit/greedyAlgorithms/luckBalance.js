// https://www.hackerrank.com/challenges/luck-balance
const swap = (a, i, j) => {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

class Heap {
  constructor(heap = []) {
    this.heap = heap;

    if (!this.empty()) this.buildMinHeap();
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
    const temp = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.minHeapify(0);

    return temp;
  }

  top() {
    return this.heap[0];
  }

  minHeapify(i, heapSize = this.size()) {
    const l = this.left(i);
    const r = l + 1;

    let smallest = (l < heapSize && this.heap[l] < this.heap[i]) ? l : i;
    if (r < heapSize && this.heap[r] < this.heap[smallest]) smallest = r;
  
    if (smallest !== i) {
      swap(this.heap, i, smallest);
      this.minHeapify(smallest, heapSize);
    }
  }

  buildMinHeap() {
    for (let i = parseInt(this.size() / 2); i >= 0; i--)
      this.minHeapify(i);
  }
}

function luckBalance(arr, heap, l, t, k, luck){
  if (k > 0) {
    luck += l;
    arr.push(l);
    k--;
  } else {
    const min = heap.top();
    if (l <= min)
      luck -= l;
    else {
      luck -= 2 * min;
      luck += l;
      heap.pop();
      heap.push(l);
    }
  }

  return [k, luck];
}

function main(input) {
  let currentLine = 0;
  let luck = 0;
  const arr = new Array();
  let heap = {};

  let [queries, k] = input[currentLine++].split(' ').map(Number);

  for (let i = 0; i < queries; i++) {
    const [l, t] = input[currentLine++].split(' ').map(Number);

    if (t === 0)
      luck += l;
    else if (k === 0)
      luck -= l;
    else {
      [k, luck] = luckBalance(arr, heap, l, t, k, luck)
      if (k === 0) {
        heap = new Heap(arr);
        k--;
      }
    }
  }

  console.log(luck);
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  return main(processedInput);
}

processInput(`100 0
9709 1
9704 1
9080 1
9060 1
9467 1
9847 1
9590 1
9225 1
9304 1
9527 1
9329 1
9962 1
9928 1
9525 1
9491 1
9993 1
9829 1
9153 1
9936 1
9899 1
9312 1
9862 1
9610 1
9502 1
9522 1
9359 1
9617 1
9431 1
9757 1
9292 1
9875 1
9041 1
9626 1
9656 1
9893 1
9442 1
9369 1
9282 1
9117 1
9245 1
9841 1
9715 1
9778 1
9150 1
9738 1
9699 1
9642 1
9517 1
9407 1
9675 1
9918 1
9031 1
9369 1
9935 1
9868 1
9934 1
9660 1
9931 1
9273 1
9168 1
9404 1
9017 1
9288 1
9532 1
9700 1
9291 1
9126 1
9782 1
9545 1
9076 1
9346 1
9018 1
9732 1
9032 1
9992 1
9630 1
9952 1
9885 1
9328 1
9419 1
9705 1
9611 1
9440 1
9907 1
9303 1
9449 1
9876 1
9335 1
9723 1
9698 1
9823 1
9070 1
9258 1
9102 1
9370 1
9788 1
9725 1
9811 1
9474 1
9602 1`)