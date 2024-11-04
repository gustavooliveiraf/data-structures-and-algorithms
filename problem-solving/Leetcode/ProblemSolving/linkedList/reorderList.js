// https://leetcode.com/problems/reorder-list
function reverseList(head) {
  let prev = null, curr = head, next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

function middleNode(head) {
  let slow = head, fast = slow.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let startPointer = head;
  let pointerMiddleNode = middleNode(head);
  let pointerMiddle = pointerMiddleNode.next;
  pointerMiddleNode.next = null;
  pointerMiddle = reverseList(pointerMiddle);

  while (startPointer && pointerMiddle) {
    const nextStartPointer = startPointer.next;
    const nextPointerMiddle = pointerMiddle.next;

    startPointer.next = pointerMiddle;
    pointerMiddle.next = nextStartPointer;

    startPointer = nextStartPointer;
    pointerMiddle = nextPointerMiddle;
  }

  return head;
};
