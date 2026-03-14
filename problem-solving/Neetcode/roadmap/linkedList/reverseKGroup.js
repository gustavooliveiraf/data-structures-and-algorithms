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
   * @param {number} k
   * @return {ListNode}
   */
  reverseKGroup(head, k) {
    let prev = null, cur = head, next = null, nextHead = head;
    
    for (let j = 0; j < k - 1; j++) {
      nextHead = nextHead && nextHead.next;
    }
    if (!nextHead) {
      return head;
    }

    for (let i = 0; i < k; i++) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }

    head.next = this.reverseKGroup(cur, k);

    return prev;
  }
}

const k = 3;
const head =
new ListNode(1,
  new ListNode(2,
    new ListNode(3,
      new ListNode(4,
        new ListNode(5,
          new ListNode(6)
        )
      )
    )
  )
);

let pointer = new Solution().reverseKGroup(head, k);
while (pointer) {
  console.log(pointer.val);
  pointer = pointer.next;
}
