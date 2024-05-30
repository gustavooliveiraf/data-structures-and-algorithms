/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  constructor() {
    this.nodes = new Array();
  }
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  isSameTree(p, q) {
    if (!p && !q) {
      return true;
    } else if (!p || !q || p.val !== q.val) {
      return false;
    }

    return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
  }

  findNode(root, val) {
    if (!root) {
      return;
    }
    if (root.val === val) {
      this.nodes.push(root);
    }

    this.findNode(root.left, val);
    this.findNode(root.right, val);
  }

  /**
   * @param {TreeNode} root
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSubtree(root, subRoot) {
    this.findNode(root, subRoot.val);

    if (!this.nodes.length) {
      return false;
    }

    for (let node of this.nodes) {
      if (this.isSameTree(node, subRoot)) {
        return true;
      }
    }

    return false;
  }
}
