// https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/788/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let index;
function buildTreeAux(preorder, inorder, start, end, map) {
  if (start > end) return null;

  const node = new Node(preorder[index++]);
  if (start === end) return node;

  const charIndex = map.get(node.val);
  node.left = buildTreeAux(preorder, inorder, start, charIndex - 1, map)
  node.right = buildTreeAux(preorder, inorder, charIndex + 1, end, map)

  return node;
}

var buildTree = function(preorder, inorder) {
  index = 0;
  const map = new Map();
  for (let i = 0; i < inorder.length; i++)
    map.set(inorder[i], i);

  return buildTreeAux(preorder, inorder, 0, inorder.length - 1, map);
};
