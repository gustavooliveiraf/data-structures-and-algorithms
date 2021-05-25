// https://www.hackerrank.com/challenges/ctci-is-binary-search-tree

#include <climits>

bool checkBSTUtil(Node* root, int min, int max) {
  if (root == NULL)
    return true;

  if (root->data <= min || root->data >= max)
    return false;

  return checkBSTUtil(root->left, min, root->data) &&
    checkBSTUtil(root->right, root->data, max);
}

bool checkBST(Node* root) {
  return checkBSTUtil(root, INT_MIN, INT_MAX);
}
