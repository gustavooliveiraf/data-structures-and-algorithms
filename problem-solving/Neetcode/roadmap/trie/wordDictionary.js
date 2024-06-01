function toIndex(char) {
  return char.charCodeAt() - 'a'.charCodeAt();
}

class Node {
  constructor(){
      this.children = new Array(26).fill(null);
      this.isWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new Node();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
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
    return this.dfs(word, 0, this.root);
  }

  dfs(word, index, pointer) {
    if (word.length === index) {
      return pointer.isWord;
    }
    if (word[index] === '.') {
      return this.wildCard(word, index, pointer);
    }
    if (!pointer.children[toIndex(word[index])]) {
      return false;
    }

    return this.dfs(word, index + 1, pointer.children[toIndex(word[index])])
  }

  wildCard(word, index, pointer) {
    for (let child of pointer.children) {
      if (child) {
        const result = this.dfs(word, index + 1, child);
        if (result) {
          return true;
        }
      }
    }

    return false;
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("day");
wordDictionary.addWord("bay");
wordDictionary.addWord("may");
console.log(wordDictionary.search("say")); // return false
console.log(wordDictionary.search("day")); // return true
console.log(wordDictionary.search(".ay")); // return true
console.log(wordDictionary.search("b..")); // return true
