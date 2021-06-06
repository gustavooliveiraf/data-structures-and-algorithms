function charToIndex(char) {
  return char.charCodeAt() - 97;
}

function indexToChar(index) {
  return String.fromCharCode(index + 97);
}

class Node {
  constructor() {
    this.children = new Array(26);
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor () {
    this.root = new Node()
  }

  insert(key) {
    let pointer = this.root;
    const { length } = key;

    for (let i = 0; i < length; i++) {
      const index = charToIndex(key[i]);
      if (!pointer.children[index])
        pointer.children[index] = new Node();

      pointer = pointer.children[index];
    }

    pointer.isEndOfWord = true;
  }

  search(key) {
    let pointer = this.root;
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
