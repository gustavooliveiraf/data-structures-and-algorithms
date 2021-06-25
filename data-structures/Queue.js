// https://www.hackerrank.com/interview/interview-preparation-kit/linked-lists/challenges
class Node {
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
    const newTail = new Node(data);

    if (this.head == null)
      this.head = newTail;
    else
      this.tail.next = newTail;

    this.tail = newTail;
  }

  pop() {
    if (this.isEmpty()) return null;

    const head = this.head;
    this.head = head.next;

    if (this.head === null) this.tail = null;

    return head.data;
  }
}
