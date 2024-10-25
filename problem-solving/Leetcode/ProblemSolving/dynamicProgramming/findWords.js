// https://leetcode.com/problems/word-search-ii/description/
function charToIndex(char) {
  return char.charCodeAt() - 97;
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

    pointer.isEndOfWord = key;
  }
}

function backtrack(board, trie, output, i, j) {
  if (board[i] === undefined || board[i][j] === undefined) {
    return;
  }

  const char = board[i][j];
  const child = trie.children[charToIndex(char)];
  if (child === undefined) {
    return;
  }

  if (child.isEndOfWord) {
    output.push(child.isEndOfWord);
    child.isEndOfWord = undefined;
  }

  board[i][j] = undefined;
  backtrack(board, child, output, i + 1, j);
  backtrack(board, child, output, i - 1, j);
  backtrack(board, child, output, i, j + 1);
  backtrack(board, child, output, i, j - 1);
  board[i][j] = char;
}

var findWords = function(board, words) {
  const output = new Array();
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      backtrack(board, trie.root, output, i, j);
    }
  }

  return output;
}

const board = [["o","a","b","n"],
               ["o","t","a","e"],
               ["a","h","k","r"],
               ["a","f","l","v"]],
      words = ["oa","oaa"];
console.log(findWords(board, words));

// function search(board, word, i, j, pointer, path) {
//   if (i === board.length || i < 0 || j === board[0].length || j < 0) {
//     return false;
//   }
//   if (board[i][j] !== word[pointer] || path[i][j] !== null) {
//     return false;
//   }
//   if (word.length === pointer + 1) {
//     return true;
//   }

//   path[i][j] = true;
//   const down = search(board, word, i + 1, j, pointer + 1, path);
//   const up = search(board, word, i - 1, j, pointer + 1, path);
//   const right = search(board, word, i, j + 1, pointer + 1, path);
//   const left = search(board, word, i, j - 1, pointer + 1, path);
//   path[i][j] = null;

//   return up || right || down || left;
// }

// var findWords = function(board, words) {
//   const result = new Array();
//   const trieFound = new Trie();
//   const trieNotFound = new Trie();

//   for (let word of words) {
//     let flag = true;

//     if (trieFound.search(word)) {
//       result.push(word);
//       continue;
//     } else if (trieNotFound.search(word)) {
//       continue;
//     }

//     for (let i = 0; i < board.length && flag; i++) {
//       for (let j = 0; j < board[i].length && flag; j++) {
//         if (board[i][j] === word[0]) {
//           const path = new Array(board.length).fill(null).map(_ => new Array(board[0].length).fill(null));
//           if (search(board, word, i, j, 0, path)) {
//             result.push(word);
//             flag = false;

//             for (let i = 0; i < word.length; i++) {
//               trieFound.insert(word.substring(i));
//             }
//           }
//         }
//       }
//     }

//     if (flag === false) {
//       for (let i = 0; i < word.length; i++) {
//         trieNotFound.insert(word.substring(i));
//       }
//     }
//   }

//   return result;
// };
