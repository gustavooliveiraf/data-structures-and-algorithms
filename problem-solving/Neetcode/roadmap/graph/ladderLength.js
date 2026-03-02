class Solution {
  /**
   * @param {string} beginWord
   * @param {string} endWord
   * @param {string[]} wordList
   * @return {number}
   */
  ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
      return 0;
    }

    const adjList = new Map();
    const visited = new Set();

    wordList.push(beginWord);
    for (const word of wordList) {
      for (let i = 0; i < word.length; i++) {
        const pattern = word.substring(0, i) + '*' + word.substring(i + 1, word.length);
        const list = adjList.get(pattern) || new Array();
        list.push(word);
        adjList.set(pattern, list);
      }
    }

    let res = 1;
    const queue = new Array(beginWord);

    while(queue.length > 0) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const word = queue.shift();
        if (word === endWord) {
          return res;
        }

        visited.add(word);

        for (let j = 0; j < word.length; j++) {
          const pattern = word.substring(0, j) + '*' + word.substring(j + 1, word.length);
          const list    = adjList.get(pattern);
  
          for (let nextWord of list) {
            if (!visited.has(nextWord)) {
              queue.push(nextWord);
            }
          }
        }
      }

      res++;
    }

    return 0;
  }
}

const beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sag","dag","dot"];
// const beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sat","dag","dot"];
console.log(new Solution().ladderLength(beginWord, endWord, wordList));
