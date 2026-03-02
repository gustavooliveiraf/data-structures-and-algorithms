class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isWord   = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let pointer = this.root;
    for (const char of word) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      if (pointer.children[index] === null) {
        pointer.children[index] = new TrieNode();
      }

      pointer = pointer.children[index];
    }

    pointer.isWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word, pointer = this.root, wordIndex = 0) {
    for (let i = wordIndex; i < word.length; i++) {
      if (word[i] !== '.') {
        const index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (pointer.children[index] === null) {
          return false;
        }

        pointer = pointer.children[index];
      } else {
        for (let j = 0; j < 26; j++) {
          if (pointer.children[j]) {
            if (this.search(word, pointer.children[j], i + 1)) {
              return true;
            }
          }
        }

        return false;
      }
    }

    return pointer.isWord;
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
