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
   * @param {number} k
   * @return {number}
   */
  kthSmallest(root, k, count = [0], result = [-1]) {
    if (root === null) {
      return;
    }

    this.kthSmallest(root.left, k, count, result);

    if (result[0] !== -1) {
      return result[0];
    }

    count[0]++;
    if (count[0] === k) {
      result[0] = root.val;
      return result[0];
    }

    this.kthSmallest(root.right, k, count, result);

    return result[0];
  }
}
