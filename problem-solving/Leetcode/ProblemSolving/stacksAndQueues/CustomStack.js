/**
 * @param {number} maxSize
 */
class CustomStack {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.stack = new Array();
    this.incStack = new Array(maxSize).fill(0);
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }
  /**
   * @return {number}
   */
  pop() {
    if (!this.stack.length) return -1;

    const lastIndexStack = this.stack.length - 1;
    const inc = this.incStack[lastIndexStack];
    this.incStack[lastIndexStack] = 0;
    this.incStack[lastIndexStack - 1] += inc;

    return this.stack.pop() + inc;
  }
  /**
   * @param {number} k
   * @param {number} val
   * @return {void}
   */
  increment(k, val) {
    const index = Math.min(k - 1, this.stack.length - 1)
    this.incStack[index] += val;
  }
}

const obj = new CustomStack(3);
obj.push(1);
obj.push(2);
console.log(obj.pop());
obj.push(2);
obj.push(3);
obj.push(4);
obj.increment(5, 100);
obj.increment(2, 100);
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
