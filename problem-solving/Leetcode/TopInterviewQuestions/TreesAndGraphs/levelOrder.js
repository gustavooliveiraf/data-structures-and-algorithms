// https://leetcode.com/problems/binary-tree-level-order-traversal/
class MyNode {
  constructor(node, level) {
    this.node = node;
    this.level = level;
  }
}

class MyQueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  push(val) {
    const newTail = new MyQueueNode(val);

    if (this.head === null)
      this.head = newTail;
    else
      this.tail.next = newTail;

    this.tail = newTail;
  }

  pop() {
    if (this.isEmpty()) return null;

    const head = this.head;
    this.head = this.head.next;

    if (this.head === null) this.tail = null;

    return head.val;
  }
}

var levelOrder = function(root) {
  if (root === null) return new Array();

  const result = new Array();
  const queue = new MyQueue();

  const nodeRoot = new MyNode(root, 0);
  queue.push(nodeRoot);
  while(!queue.isEmpty()) {
    const { node, level } = queue.pop();

    if (!result[level]) result[level] = new Array();
    result[level].push(node.val);

    if (node.left !== null) queue.push(new MyNode(node.left, level + 1));
    if (node.right !== null) queue.push(new MyNode(node.right, level + 1));
  }

  return result;
};
