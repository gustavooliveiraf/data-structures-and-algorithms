// https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list
function reverse(llist) {
  let node = llist;
  while (node.next)
    node = node.next;

  const newHead = node;
  while(node) {
    const tempNode = node;
    node.next = node.prev;
    node.prev = tempNode.next;
    node = tempNode.prev;
  }

  return newHead;
}
