class Node {
  constructor() {
    this.children = new Array(26);
  }
}

class BTree {
  insert(root, key) {
    let pointer = root;
    const { length } = key;

    for (let i = 0; i < length; i++) {
      const index = charToIndex(key[i]);
      if (!pointer.children[index])
        pointer.children[index] = new Node();

      pointer = pointer.children[index];
    }
  }

  search(root, key) {
    let pointer = root;
    const { length } = key;

    for (let i = 0; i < length; i++) {
      const index = charToIndex(key[i]);
      if (!pointer.children[index])
        return null;

      pointer = pointer.children[index];
    }

    return pointer;
  }
}
