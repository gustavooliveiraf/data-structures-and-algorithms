// https://leetcode.com/problems/binary-tree-level-order-traversal/

/* ============ using recursion: stack extra space ============ */
function connectHelper(cur, next) {
  if (cur === null) return null;
  cur.next = next;
  connectHelper(cur.left, cur.right);
  connectHelper(cur.right, cur.next ? cur.next.left : null);
}

var connect = function(root) {
  connectHelper(root, null);
  return root;
};

/* ============= using loop: constant extra space ============= */
var connect = function(root) {
  if (root === null) return null;
  let pre = root;
  while (pre.left !== null) {
    let cur = pre;
    while (cur !== null) {
      cur.left.next = cur.right;
      if (cur.next) cur.right.next = cur.next.left;
      cur = cur.next;
    }
    pre = pre.left;
  }

  return root;
};

/* ============= using queue: linear extra space ============= */
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

  top() {
    return this.head && this.head.val;
  }
}

var connect = function(root) {
  if (root === null) return null;
  const queue = new MyQueue();

  const nodeRoot = new MyNode(root, 0);
  queue.push(nodeRoot);
  while(!queue.isEmpty()) {
    const { node, level } = queue.pop();

    const next = queue.top();
    if (next !== null && level === next.level) node.next = next.node;

    if (node.left !== null) queue.push(new MyNode(node.left, level + 1));
    if (node.right !== null) queue.push(new MyNode(node.right, level + 1));
  }

  return root;
};
