// https://leetcode.com/problems/binary-search-tree-iterator
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
 */
var BSTIterator = function(root) {
  this.pointer = root;
  this.stack = new Array();
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  while (this.pointer !== null) {
    this.stack.push(this.pointer);
    this.pointer = this.pointer.left;;
  }

  const res = this.pointer = this.stack.pop();
  this.pointer = this.pointer.right;

  return res.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0 || this.pointer !== null;
};
