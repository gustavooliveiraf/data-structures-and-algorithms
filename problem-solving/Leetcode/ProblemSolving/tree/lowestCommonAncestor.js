// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
var lowestCommonAncestor = function(node, p, q, first = { found: false }, second = { found: false }) {
  if (!node || second.found) {
    return false;
  }

  let foundNode = null
  if (node === p || node === q) {
    foundNode = node;

    if (!first.found) {
      first.found = true;
    } else {
      second.found = true;
      return node;
    }
  }

  const left = lowestCommonAncestor(node.left, p, q, first, second);
  const right = lowestCommonAncestor(node.right, p, q, first, second);

  if ((foundNode && left) || (foundNode && right) || (left && right)) {
    return node;
  }

  return left || right || foundNode;
};
