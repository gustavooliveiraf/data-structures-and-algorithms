/* Stack with Linked List */
class StackNode {
  constructor(data) {
    this.data = data;
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

  top() {
    if (this.isEmpty()) return null;

    return this.front.data;
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

    return front.data;
  }
}

/* Stack with Array */
class Stack {
  constructor() {
    this.stack = new Array();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    if (this.isEmpty()) return null;

    return this.stack.pop();
  }
}
