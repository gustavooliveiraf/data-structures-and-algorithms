// https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists
function findMergeNode(headA, headB) {
  const set = new Set();

  let node = headA;
  while (node !== null) {
    set.add(node);
    node = node.next;
  }

  node = headB;
  while (node !== null) {
    if (set.has(node)) return node.data;
    node = node.next;
  }

  return -1;
}
