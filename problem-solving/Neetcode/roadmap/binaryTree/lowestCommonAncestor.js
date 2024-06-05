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

class TreeNode {
  constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

class Solution {
  /**
   * @param {TreeNode} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  lowestCommonAncestor(root, p, q) {
    if (p.val > root.val && q.val > root.val) {
      return this.lowestCommonAncestor(root.right, p, q);
    }
    if (p.val < root.val && q.val < root.val) {
      return this.lowestCommonAncestor(root.left, p, q);
    }
    
    return root;
  }
}

const root = new TreeNode(2, new TreeNode(1));
// const root = new TreeNode(5, new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)), new TreeNode(8, new TreeNode(7), new TreeNode(9)));
// const root = new TreeNode(5, new TreeNode(3, new TreeNode(1), new TreeNode(4)), new TreeNode(8));
console.log(new Solution().lowestCommonAncestor(root, 2, 1));
