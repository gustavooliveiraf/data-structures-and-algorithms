/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
    }
}

class Solution {
  /**
   * @param {ListNode} head
   * @return {void}
   */
  reorderList(head) {
    let slow = head, fast = head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    slow = slow.next;
    let right = null;
    while (slow !== null) {
      const temp = slow.next;
      slow.next = right;

      right = slow;
      slow = temp;
    }

    let left = head, pointer = new ListNode();
    while (right !== null) {
      const tempLeft = left.next;

      pointer.next = left;
      left.next = right;

      pointer = right;

      left = tempLeft;
      right = right.next;
    }

    if (left.next) {
      pointer.next = left;
      left.next = null;
    }

    return head;
  }
}

const head = new ListNode(2, new ListNode(4, new ListNode(6, new ListNode(8, new ListNode(10)))));
let pointer = new Solution().reorderList(head);

while (pointer !== null) {
  console.log(pointer.val);
  pointer = pointer.next;
}
