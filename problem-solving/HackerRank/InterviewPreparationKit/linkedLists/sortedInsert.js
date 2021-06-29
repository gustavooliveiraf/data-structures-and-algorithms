// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list
function sortedInsert(llist, data) {
  const newNode = new DoublyLinkedListNode(data);
  let node = llist, isLastNode = false;

  while (node.next && node.data < data) node = node.next;
  if (node.next === null && node.data < data) isLastNode = true;

  if (node === llist) {
    newNode.next = llist;
    llist.prev = newNode;
    llist = newNode;
  } else if (isLastNode) {
    node.next = newNode;
    newNode.prev = node;
  } else {
    newNode.next = node;
    newNode.prev = node.prev;
    node.prev.next = newNode;
    node.prev = newNode;
  }

  return llist;
}
