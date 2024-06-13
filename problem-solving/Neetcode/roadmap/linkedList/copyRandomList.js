// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    const map = new Map();
    let pointer = head;
    while (pointer !== null) {
      map.set(pointer, new Node(pointer.val));
      pointer = pointer.next;
    }

    pointer = head;
    while (pointer !== null) {
      const newNode = map.get(pointer);
      newNode.next = map.get(pointer.next) || null;
      newNode.random = map.get(pointer.random) || null;

      pointer = pointer.next;
    }

    return map.get(head);
  }
}
