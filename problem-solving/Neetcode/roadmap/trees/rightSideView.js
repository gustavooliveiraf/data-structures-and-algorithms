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
    this.array = new Array(10).fill(null); // log(1000) < 10
    this.array.forEach((_, index, self) =>  self[index] = new Array());
  }

  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  rightSideView(root, level = 0) {
    if (root === null) {
      return [];
    }

    this.array[level].push(root.val);
    this.rightSideView(root.left, level + 1);
    this.rightSideView(root.right, level + 1);

    if (level === 0) {
      return this.array.filter(arr => arr.length).map(level => level.at(-1));
    }
  }
}
