/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
  /**
   * @param {TreeNode} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  lowestCommonAncestor(node, p, q, obj = { foundCount: 0 }) {
    if (obj.foundCount === 2) {
      return null;
    }
    if (!node || node === p || node === q) {
      return node;
    }

    const left = this.lowestCommonAncestor(node.left, p, q);
    const right = this.lowestCommonAncestor(node.right, p, q);

    if (left && right) {
      obj.foundCount++;
      return node;
    }

    return left || right;
  }
}
