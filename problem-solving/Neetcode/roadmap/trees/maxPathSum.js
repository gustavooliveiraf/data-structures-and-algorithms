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
   * @return {number}
   */
  maxPathSum(root, obj = { res: -Infinity }, firstCall = true) {
    if (!root) {
      return -Infinity;
    }

    const leftTree = this.maxPathSum(root.left, obj, false);
    const rightTree = this.maxPathSum(root.right, obj, false);

    const maxLocal =  Math.max(leftTree + root.val, root.val, rightTree + root.val);
    obj.res = Math.max(obj.res, maxLocal, leftTree + root.val + rightTree);

    if (firstCall) {
      return obj.res;
    } else {
      return maxLocal;
    }
  }
}
