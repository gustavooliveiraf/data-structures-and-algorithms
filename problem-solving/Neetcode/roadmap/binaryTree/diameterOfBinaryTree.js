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
    this.diameter = 0
  }

  /**
   * @param {TreeNode} root
   * @return {number}
   */
  diameterOfBinaryTreeRecursion(root) {
    if (!root) {
      return 0;
    }

    const leftH = this.diameterOfBinaryTreeRecursion(root.left);
    const rightH = this.diameterOfBinaryTreeRecursion(root.right);

    this.diameter = Math.max(this.diameter, leftH + rightH);

    return 1 + Math.max(leftH, rightH);
  }

  /**
   * @param {TreeNode} root
   * @return {number}
   */
  diameterOfBinaryTree(root) {
    this.diameterOfBinaryTreeRecursion(root);

    return this.diameter;
  }
}
