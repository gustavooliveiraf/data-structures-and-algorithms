class QueueNode {
  constructor(index) {
    this.index = index;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null;
  }

  push(item) {
    const temp = new QueueNode(item);
    
    if (this.rear === null) {
      this.front = this.rear = temp;
      return;
    }

    this.rear.next = temp;
    this.rear = temp;
  }

  pop() {
    if (this.isEmpty()) return null;

    const temp = this.front;
    this.front = temp.next;

    if (this.front === null) this.rear = null;

    return temp;
  }
}