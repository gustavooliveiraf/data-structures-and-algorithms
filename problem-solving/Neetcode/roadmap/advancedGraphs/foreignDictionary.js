class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdge(char1, char2) {
    if (!this.adjList.has(char1)) {
      this.adjList.set(char1, new Array());
    }

    this.adjList.get(char1).push(char2);
  }
}

class Solution {
  topologicalSort(adjList, globalVisited, localVisited, key, res) {
    if (localVisited.has(key)) {
      return true;
    }
    if (globalVisited.has(key)) {
      return false;
    }

    localVisited.add(key);
    globalVisited.add(key);

    if (adjList.has(key)) {
      for (let curKey of adjList.get(key)) {
        if (this.topologicalSort(adjList, globalVisited, localVisited, curKey, res)) {
          return true;
        }
      }
    }

    localVisited.delete(key);
    res.push(key);

    return false;
  }

  /**
   * @param {string[]} words
   * @returns {string}
   */
  foreignDictionary(words) {
    const graph = new Graph();
    const globalVisited = new Set();
    const localVisited = new Set();
    const letters = new Set();
    const res = new Array();

    for (const char of words[0]) {
      letters.add(char)
    }

    for (let i = 1; i < words.length; i++) {
      for (const char of words[i]) {
        letters.add(char)
      }

      if (words[i - 1].length > words[i].length && words[i - 1].startsWith(words[i])) return "";
      if (words[i].startsWith(words[i - 1])) continue;

      let j = 0;
      while (words[i - 1][j] === words[i][j]) {
        j++;
      }

      graph.addEdge(words[i - 1][j], words[i][j]);
    }

    for (let key of graph.adjList.keys()) {
      if (this.topologicalSort(graph.adjList, globalVisited, localVisited, key, res)) {
        return "";
      }
    }

    return [...new Set([...res.reverse().join(''), ...letters])].join('');
  }
}

const words = ["a"];
console.log(new Solution().foreignDictionary(words));
