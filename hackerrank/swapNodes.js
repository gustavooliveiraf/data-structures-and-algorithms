// https://www.hackerrank.com/challenges/swap-nodes-algo/problem
class QueueNode {
  constructor(node) {
    this.node = node;
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

  push(node) {
    const temp = new QueueNode(node);
    
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

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  insertInLevelOrder(root, indexes) {
    let index = 1;
    const queue = new Queue();
    queue.push(root);
  
    while (queue.isEmpty() === false) {
      const left = indexes[index++];
      const right = indexes[index++];

      const node = queue.pop().node;
      if (left !== -1) node.left = new Node(left);
      if (right !== -1) node.right = new Node(right);

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    return index;
  }

  inorder(node) {
    if(node === null)
      return;
    this.inorder(node.left);
    process.stdout.write(node.data + ' ');
    this.inorder(node.right);
  }
}

const swap = (node) => {
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
}

function swapNodes(node, level, k) {
  if (node === null || (node.left === null && node.right === null))
    return;
  
  if (level % k === 0)
    swap(node);
  
  swapNodes(node.left, level + 1, k);
  swapNodes(node.right, level + 1, k);
}

function main(processedInput) {
  const root = new Node(1);
  const bst = new BinarySearchTree();

  let index = bst.insertInLevelOrder(root, processedInput);

  const length = processedInput[index++];
  for (let i = 0; i < length; i++) {
    const k = processedInput[index++];
    swapNodes(root, 1, k);
    bst.inorder(root);
    process.stdout.write('\n');
  }
}

function processInput(input) {
  const processedInput = input.replace(/\n/g, ' ').split(' ').map(elem => parseInt(elem));

  return main(processedInput);
}

processInput(`11
2 3
4 -1
5 -1
6 -1
7 8
-1 9
-1 -1
10 11
-1 -1
-1 -1
-1 -1
2
2
4`)
