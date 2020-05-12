class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if(newNode.data < node.data) {
      if(node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if(node.right === null) node.right = newNode;
      else this.insertNode(node.right,newNode);
    }
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if(node === null) return null;

    else if(key < node.data) { 
      node.left = this.removeNode(node.left, key);
      return node;
    } else if(key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if(node.left === null) {
        node = node.right;
        return node;
      } else if(node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  height(node) {
    if (node === null) return 0;
    else {
      const l = this.height(node.left);
      const r = this.height(node.right);

      return Math.max(l, r) + 1;
    }
  }

  checkHeight(root) {
    if (!root) return -1;
    
    const leftHeight = this.checkHeight(root.left);
    if (leftHeight === -Infinity) return -Infinity;
    
    const rightHeight = this.checkHeight(root.right);
    if (rightHeight === -Infinity) return -Infinity;
    
    const heightDiff = Math.abs(leftHeight - rightHeight);
    return heightDiff > 1 ? -Infinity : Math.max(leftHeight, rightHeight) + 1;
  }

  checkBalanced(root) {
    return this.checkHeight(root) !== -Infinity;
  }

  getRootNode() {
    return this.root;
  }

  findMinNode(node) {
    if(node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  inorder(node) { 
    if(node !== null) {
      this.inorder(node.left);
      process.stdout.write(node.data + ' ')
      this.inorder(node.right);
    }
  }
}

var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17 

let root = BST.getRootNode();

BST.remove(27);

console.log(BST.checkBalanced(root));

// console.log(BST.height(root));

// BST.remove(15);
// BST.remove(5);
// BST.remove(9);
// BST.remove(17);

// console.log(BST.height(root));
