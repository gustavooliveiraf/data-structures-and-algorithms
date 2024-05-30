function toIndex(char) {
  return char.charCodeAt() - 'a'.charCodeAt();
}

class Node {
  constructor(){
      this.children = new Array(26).fill(null);
      this.isWord = false;
  }
}

class PrefixTree {
  constructor() {
    this.root = new Node();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let pointer = this.root;
    for (let char of word) {
      const child = pointer.children[toIndex(char)] || new Node();

      pointer.children[toIndex(char)] = child;

      pointer = child;
    }

    pointer.isWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let pointer = this.root;
    for (let char of word) {
      if (!pointer.children[toIndex(char)]) {
        return false;
      }
      pointer = pointer.children[toIndex(char)];
    }

    return pointer.isWord;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let pointer = this.root;
    for (let char of prefix) {
      if (!pointer.children[toIndex(char)]) {
        return false;
      }
      pointer = pointer.children[toIndex(char)];
    }

    return true;
  }
}

const prefixTree = new PrefixTree();
prefixTree.insert("dog");
prefixTree.search("dog");
prefixTree.startsWith("dog");
