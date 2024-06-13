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
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    let l, r, fakeHead = new ListNode();
    fakeHead.next = head;
    l = r = fakeHead;

    for (let i = 0; i < n; i++) {
      r = r.next;
    }

    while (r.next !== null) {
      l = l.next;
      r = r.next;
    }

    l.next = l.next.next;

    return fakeHead.next;
  }
}
