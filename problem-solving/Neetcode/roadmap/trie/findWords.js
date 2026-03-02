class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isWord   = false;
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode();
    this.insert(words);
  }

  insert(words) {
    for (const word of words) {
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
  }
}

class Solution {
  findWordsExec(board, word, pointer, i, j, n, m, directions, res) {
    const char = board[i][j];
    const newWord = word + char;
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

    if (!pointer.children[index]) {
      return;
    }

    if (pointer.children[index].isWord) {
      res.add(newWord);
    }

    board[i][j] = null;

    for (const [x, y] of directions) {
      const nextX = i + x, nextY = j + y;
      if (nextX >= 0 && nextY >= 0 && nextX < n && nextY < m && board[nextX][nextY] !== null) {
        this.findWordsExec(board, newWord, pointer.children[index], nextX, nextY, n, m, directions, res);
      }
    }

    board[i][j] = char;
  }

  /**
   * @param {character[][]} board
   * @param {string[]} words
   * @return {string[]}
   */
  findWords(board, words) {
    const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    const n = board.length, m = board[0].length;
    const trie = new Trie(words);
    const res = new Set();

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        this.findWordsExec(board, '', trie.root, i, j, n, m, directions, res);
      }
    }

    return Array.from(res);
  }
}

const board = [
  ["a","b","c","d"],
  ["s","a","a","t"],
  ["a","c","k","e"],
  ["a","c","d","n"]
];
const words = ["bat","cat","back","backend","stack"]
console.log(new Solution().findWords(board, words));
