// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list
const SinglyLinkedListNode = class {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
};

const LinkedList = class {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null)
      this.head = node;
    else
      this.tail.next = node;

    this.tail = node;
  }
};

function insertNodeAtPosition(llist, data, position) {
  let node = llist, count = 1;
  const newNode = new SinglyLinkedListNode(data);

  while (count < position) {
    node = node.next;
    count++;
  }

  if (position === 0) {
    newNode.next = llist;
    llist = newNode;
  } else {
    newNode.next = node.next;
    node.next = newNode;
  }

  return llist;
}

const llist = new LinkedList();
llist.insertNode(16);
llist.insertNode(13);
llist.insertNode(7);

let head = insertNodeAtPosition(llist.head, 1, 2);
while (head != null) {
  console.log(head.data);

  head = head.next;
}
