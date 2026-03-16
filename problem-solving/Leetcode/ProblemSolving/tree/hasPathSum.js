/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum, obj = { found: false }) {
  if (obj.found) {
    return true;
  }
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return (targetSum - root.val) === 0 ? (obj.found = true) : false;
  }

  return hasPathSum(root.left, targetSum - root.val, obj) || hasPathSum(root.right, targetSum - root.val, obj);
};
