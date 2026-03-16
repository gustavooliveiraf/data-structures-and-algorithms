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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum, obj = { path: [], res: [] }) {
  if (!root) {
    return [];
  }

  obj.path.push(root.val)
  targetSum = targetSum - root.val;

  if (!root.left && !root.right && targetSum === 0) {
    obj.res.push(obj.path.slice());
  }

  pathSum(root.left, targetSum, obj);
  pathSum(root.right, targetSum, obj);

  obj.path.pop();

  return obj.res;
};
