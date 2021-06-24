// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/799/
class Node {
  constructor(num, freq) {
    this.num = num;
    this.freq = freq;
  }
}

class Heap {
  constructor() {
    this.heap = new Array();
  }

  parent(i) { return (i - 1) >> 1; }

  size() { return this.heap.length; }

  isEmpty() { return this.size() === 0; }

  top() { return this.heap[0]; }

  push(num, freq) {
    this.heap.push(new Node(num, freq));

    let i =  this.size() - 1;
    while (i !== 0 && (this.heap[i].freq < this.heap[this.parent(i)].freq)) {
      [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
      i = this.parent(i);
    }
  }

  pop() {
    if (this.isEmpty()) return null;

    const top = this.top();
    this.size() > 1 ? this.heap[0] = this.heap.pop() : this.heap.pop();
    this.heapify(0);

    return top;
  }

  heapify(i) {
    const left = 2 * i + 1;
    const right = left + 1;

    let comp = (left < this.size() && (this.heap[left].freq < this.heap[i].freq)) ? left : i;
    if (right < this.size() && (this.heap[right].freq < this.heap[comp].freq)) comp = right;

    if (comp !== i) {
      [this.heap[i], this.heap[comp]] = [this.heap[comp], this.heap[i]];
      this.heapify(comp);
    }
  }

  toArrayNum() {
    return this.heap.map(node => node.num);
  }
}

var topKFrequent = function(nums, k) {
  const map = new Map();
  nums.forEach(num => map.set(num, (map.get(num) || 0) + 1));

  const heap = new Heap();
  for (let [key, value] of map) {
    if (heap.size() < k) {
      heap.push(key, value);
    } else {
      if (value > heap.top().freq) {
        heap.pop();
        heap.push(key, value);
      }
    }
  }

  return heap.toArrayNum();
};

const nums = [1,1,1,2,2,3], k = 2;
console.log(topKFrequent(nums, k));
