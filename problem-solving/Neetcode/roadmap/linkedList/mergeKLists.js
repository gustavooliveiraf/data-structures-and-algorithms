class Heap {
  constructor() {
    this.heap = new Array();
  }

  push(node) {
    this.heap.push(node);
    this.heap.sort((a, b) => b.val - a.val);
  }

  pop() {
    return this.heap.pop();
  }

  empty() {
    return this.heap.length === 0;
  }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    const res = new ListNode();
    let pointer = res;
    const heap = new Heap();

    for (let i = 0; i < lists.length; i++) {
      if (lists[i] !== null) {
        heap.push(lists[i]);
      }
    }

    while (!heap.empty()) {
      pointer = pointer.next = heap.pop();

      if (pointer.next !== null) {
        heap.push(pointer.next);
      }
    }

    return res.next;
  }
}
