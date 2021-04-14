class StackNode {
  constructor(index) {
    this.index = index;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.front = null
  }

  isEmpty() {
    return this.front === null;
  }

  push(item) {
    const newFront = new StackNode(item);
    newFront.next = this.front;

    this.front = newFront;
  }

  pop() {
    if (this.isEmpty()) return null;

    const front = this.front;
    this.front = front.next;

    return front.index;
  }
}
