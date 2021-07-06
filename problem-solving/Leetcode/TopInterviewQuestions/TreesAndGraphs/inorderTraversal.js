// https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/786/
var inorderTraversal = function(root) {
  const response = new Array();
  const stack = new Array();

  let cur = root;
  while (cur !== null || stack.length !== 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    response.push(cur.val);
    cur = cur.right;
  }

  return response;
};
