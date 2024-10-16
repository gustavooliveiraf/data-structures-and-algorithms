// https://leetcode.com/problems/binary-tree-paths
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const result = new Array();
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root, path = '', result = new Array()) {
  if (!path.length) {
    path += root.val;
  } else {
    path += '->' + root.val;
  }

  if (root.left === null && root.right === null) {
    result.push(path);
  }

  if (root.left !== null) {
    binaryTreePaths(root.left, path, result);
  }

  if (root.right !== null) {
    binaryTreePaths(root.right, path, result);
  }

  return result;
};
