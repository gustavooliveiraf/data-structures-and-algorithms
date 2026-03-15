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
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  isValidBST(root, min = -Infinity, max = Infinity) {
    if (root === null) {
      return true;
    }
    if (root.val <= min || root.val >= max) {
      return false
    }

    return this.isValidBST(root.left, min, root.val) && this.isValidBST(root.right, root.val, max);
  }
}
