class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */

  mergeTwoLists(list1, list2) {
    let pointer = new ListNode();
    let head = pointer;

    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        pointer.next = list1;
        list1 = list1.next;
      } else {
        pointer.next = list2;
        list2 = list2.next;
      }
      pointer = pointer.next;
    }

    pointer.next = list1 || list2;

    return head.next;
  }
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(5)));

const head = new Solution().mergeTwoLists(list1, list2);

console.log(head.val, head.next.val, head.next.next.val)
