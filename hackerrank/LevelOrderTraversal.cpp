// https://www.hackerrank.com/challenges/tree-level-order-traversal/problem

void levelOrder(Node * root) {
  if (root == NULL)  return;

  queue<Node*> q;
  q.push(root);

  while (q.empty() == false) {
    Node *node = q.front();
    cout << node->data << " ";
    q.pop();

    if (node->left != NULL) q.push(node->left);
    if (node->right != NULL) q.push(node->right);
  }
}