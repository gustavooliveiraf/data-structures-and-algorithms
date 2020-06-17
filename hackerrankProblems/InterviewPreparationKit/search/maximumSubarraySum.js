// https://www.hackerrank.com/challenges/maximum-subarray-sum
class Node {
  constructor(value, parenteValue) {
    this.parent = parenteValue;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        newNode.parent = node
        node.left = newNode;
      }
      else {
        this.insertNode(node.left, newNode);
      }
    } else if (value > node.value) {
      if (node.right === null) {
        newNode.parent = node
        node.right = newNode;
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(value) {
    if (this.root === null)
      this.root = new Node(value , -Infinity);
    else {
      this.insertNode(this.root, new Node(value));
      return newNode;
    }
  }

  getMinimumValueLargerThan(value, node = this.root) {
    if (value < node.value)
      return this.getMinimumValueLargerThan(value, node.left);
    else if (value > node.value)
      return this.getMinimumValueLargerThan(value, node.right);
    else {
      const parent = node.parent > value ? node.parent : value;
      const right = node.right && node.right.value;
      return right ? right : parent;
    }
  }
}

// function maximumSubarraySum(arr, n, m) {
//   const sum = new Array(n);
//   let tree = new BinarySearchTree();
//   sum[0] = arr[0] % m;
//   tree.insert(sum[0]);

//   let max = sum[0], min;
//   for (let i = 1; i < n; i++) {
//     sum[i] = (sum[i - 1] + arr[i]) % m;
//     max = Math.max(max, sum[i]);
//     tree.insert(sum[i]);
//     min = tree.getMinimumValueLargerThan(sum[i]);
//     max = Math.max(max, (sum[i] - min + m) % m);
//   }

//   return max;
// }

// function maximumSubarraySum(arr, n, m) {
//   // let tree = new BinarySearchTree();
//   const set = new Set();
//   let prefix = arr[0] % m;
//   set.add(prefix);

//   let max = prefix;
//   for (let i = 1; i < n; i++) {
//     prefix = (prefix + arr[i]) % m;
//     max = Math.max(max, prefix);

//     let it = Infinity;
//     for (let item of set) {
//       if (item > prefix) {
//         if (item <= it) {
//           it = item;
//         }
//       }
//     }
//     if (it != Infinity)
//       max = Math.max(max, (prefix - it + m) % m);

//     set.add(prefix)
//   }

//   return max;
// }

function maximumSubarraySum(arr, n, m) {
  let tree = new BinarySearchTree();
  const map = new Map();

  let prefix = arr[0] % m;
  tree.insert(prefix);
  map.set(prefix, tree.root);

  let max = prefix;
  for (let i = 1; i < n; i++) {
    prefix = (prefix + arr[i]) % m;
    max = Math.max(max, prefix);

    let minimumValueLargerThanPrefix;
    const node = map.get(prefix);
    if (node) {
      let min = Math.max(tree.getMinimumChild(prefix), tree.getMinimumParent(prefix));
    } else {
      set.add(prefix)
      tree.insert(prefix)
    }

    max = Math.max(max, (prefix - minimumValueLargerThanPrefix + m) % m);
    set.has(prefix) ? null : (tree.insert(prefix), set.add(prefix));
  }

  return max;
}

function main(input) {
  let currentLine = 0;
  const cases = Number(input[currentLine++]);

  for (let i = 0; i < cases; i++) {
    const [n, m] = input[currentLine++].split(' ').map(Number);
    const arr = input[currentLine++].split(' ').map(Number);

    console.log(maximumSubarraySum(arr, n, m));

    if (i === 10) break;
  }
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  main(processedInput);
}

processInput(`1
5 7
3 3 9 9 5`)