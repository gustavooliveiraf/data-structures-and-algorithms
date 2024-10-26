// https://leetcode.com/problems/merge-k-sorted-lists/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

class Heap {
  constructor(heap = []) {
    this.heap = heap;
  }

  parent(i) { return parseInt((i-1)/2); }

  left(i) { return 2 * i + 1; }

  right(i) { return 2 * i + 2 }

  size() {
    return this.heap.length;
  }

  empty() {
    return this.size() === 0;
  }

  swap = (i, j) => {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  minHeapify(i) {
    const l = this.left(i);
    const r = this.right(i);

    let smallest = (l < this.size() && this.heap[l].val < this.heap[i].val) ? l : i;
    if (r < this.size() && this.heap[r].val < this.heap[smallest].val) smallest = r;
  
    if (smallest !== i) {
      this.swap(i, smallest);
      this.minHeapify(smallest);
    }
  }

  push(node) {
    this.heap.push(node);
    
    let i = this.size() - 1;
    while (i !== 0 && this.heap[this.parent(i)].val > this.heap[i].val) {
      this.swap(i, this.parent(i))
      i = this.parent(i);
    }
  }

  pop() {
    if (this.empty()) return null;

    const node = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.minHeapify(0);

    return node;
  }
}
var mergeKLists = function(lists) {
  const heap = new Heap();
  for (let head of lists) {
    if (head) {
      const pointer = new ListNode(head.val, head);
      heap.push(pointer);
    }
  }

  const newHead = new ListNode();
  let tail = newHead;
  while(!heap.empty()) {
    const pointer = heap.pop();
    tail.next = pointer.next;
    tail = pointer.next;

    if (pointer.next.next) {
      pointer.val = pointer.next.next.val;
      pointer.next = pointer.next.next;
      heap.push(pointer);
    }
  }

  return newHead.next;
};
