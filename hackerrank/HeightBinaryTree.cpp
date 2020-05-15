// https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/submissions/code/158687869

int height(Node* root) {
  if (root == NULL) return -1;

  int l = height(root->left);
  int r = height(root->right);

  return max(l, r) + 1;
}
