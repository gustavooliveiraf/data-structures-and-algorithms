// https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/787/
class Node {
  constructor(node, level) {
    this.node = node;
    this.level = level;
  }
}

var zigzagLevelOrder = function(root) {
  if (root === null) return new Array();

  const result = new Array();
  const stackEvenLevel = new Array();
  const stackOddLevel = new Array();

  const nodeRoot = new Node(root, 0);
  stackEvenLevel.push(nodeRoot);
  while(stackOddLevel.length !== 0 || stackEvenLevel.length !== 0) {
    while(stackEvenLevel.length !== 0) {
      const { node, level } = stackEvenLevel.pop();

      if (node.left !== null) stackOddLevel.push(new Node(node.left, level + 1));
      if (node.right !== null) stackOddLevel.push(new Node(node.right, level + 1));

      if (!result[level]) result[level] = new Array();
      result[level].push(node.val);
    } 
    while (stackOddLevel.length !== 0) {
      const { node, level } = stackOddLevel.pop();

      if (node.right !== null) stackEvenLevel.push(new Node(node.right, level + 1)); 
      if (node.left !== null) stackEvenLevel.push(new Node(node.left, level + 1));

      if (!result[level]) result[level] = new Array();
      result[level].push(node.val);
    }
  }

  return result;
};
