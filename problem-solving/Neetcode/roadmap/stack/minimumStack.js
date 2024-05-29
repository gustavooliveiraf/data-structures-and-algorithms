class MinStack {
  constructor() {
    this.stack = new Array();
    this.minStack = new Array();
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    const min = Math.min(val, !this.minStack.length ? val : this.minStack.at(-1));
    this.minStack.push(min);
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack.at(-1);
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack.at(-1);
  }
}

const input = ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"];
const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin(1));
minStack.pop(1);
console.log(minStack.top(1));
console.log(minStack.getMin(1));
