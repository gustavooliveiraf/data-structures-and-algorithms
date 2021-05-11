// https://www.hackerrank.com/interview/interview-preparation-kit/linked-lists/challenges
class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  push(data) {
    const newNode = new QueueNode(data);

    if (this.head == null)
      this.head = newNode;
    else
      this.tail.next = newNode;

    this.tail = newNode;
  }

  pop() {
    if (this.isEmpty()) return null;

    const oldNode = this.head;
    this.head = oldNode.next;

    if (this.head === null) this.tail = null;

    return oldNode;
  }
}
