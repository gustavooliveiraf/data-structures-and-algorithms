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
  goodNodes(root, maxLocal = root.val, goodNodesCount = [0]) {
    if (root === null) {
      return 0;
    }
    if (root.val >= maxLocal) {
      goodNodesCount[0]++;
      maxLocal = root.val;
    }

    this.goodNodes(root.left, maxLocal, goodNodesCount);
    this.goodNodes(root.right, maxLocal, goodNodesCount);

    return goodNodesCount[0];
  }
}


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(2);
const level1node1 = new TreeNode(1);
const level1node2 = new TreeNode(1);
const level2node1 = new TreeNode(3);
const level2node2 = new TreeNode(1);
const level2node3 = new TreeNode(5);

root.left = level1node1; // level 0
root.right = level1node2;

level1node1.left = level2node1; // level 1

level1node2.left = level2node2; // level 2
level1node2.right = level2node3;

const solution = new Solution()
console.log(solution.goodNodes(root));
