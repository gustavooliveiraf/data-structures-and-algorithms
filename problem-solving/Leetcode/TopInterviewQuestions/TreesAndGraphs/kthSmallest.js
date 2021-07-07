// https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/790/
function helper(root, arr) {
  if (root == null) return null;
  helper(root.left, arr);
  arr.push(root.val);
  helper(root.right, arr);
}

var kthSmallest = function(root, k) {
  const arr = new Array();
  helper(root, arr);
  return arr[k - 1];
};
