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
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode();

    let pointer = dummyHead, carry = 0;
    while (l1 !== null || l2 !== null) {
      const list1 = l1 && l1.val || 0;
      const list2 = l2 && l2.val || 0;

      let list3 = list1 + list2 + carry;

      if (list3 > 9) {
        list3 = list3 % 10;
        carry = 1;
      } else {
        carry = 0;
      }

      const node = new ListNode(list3);
      pointer.next = node;
      pointer = node;

      l1 = l1 && l1.next;
      l2 = l2 && l2.next;
    }

    if (carry === 1) {
      const node = new ListNode(carry);
      pointer.next = node;
    }

    return dummyHead.next;
  }
}
