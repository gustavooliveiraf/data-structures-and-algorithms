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
    this.isTreeBalanced = true;
  }

  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  isBalancedRecursion(root) {
    if (!root) {
      return [true, 0];
    }

    const left = this.isBalancedRecursion(root.left);
    const right = this.isBalancedRecursion(root.right);

    const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1

    return [balanced, 1 + Math.max(left[1], right[1])];
  }

  isBalanced(root) {
    return this.isBalancedRecursion(root)[0];
  }
}
