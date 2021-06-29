// https://www.hackerrank.com/challenges/tree-huffman-decoding
void decode_huff(node * root, string s) {
  string ans = "";
  struct node* curr = root;

  for (int i = 0; i < s.size(); i++) {
    if (s[i] == '0')
      curr = curr->left;
    else
      curr = curr->right;

    if (curr->left == NULL and curr->right == NULL) {
      ans += curr->data;
      curr = root;
    }
  }

  cout << ans << endl;
}
