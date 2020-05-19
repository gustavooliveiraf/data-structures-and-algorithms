// https://www.hackerrank.com/challenges/no-prefix-set/problem
function charToIndex(char) {
  return char.charCodeAt() - 97;
}

class Node {
  constructor() {
    this.children = new Array(10); // a - j
    this.isEndOfWord = false;
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
      else {
        if (i === (length - 1))
          return key;
      }

      pointer = pointer.children[index];

      if (pointer.isEndOfWord) return key;
    }

    pointer.isEndOfWord = true;

    return false;
  }
}

function main(queries) {
  let index = 0;
  let n = queries[index++];
  const root = new Node();
  const bTree = new BTree();

  for (let i = 0; i < n; i++) {
    const key = bTree.insert(root, queries[index++]);
    if (key) {
      process.stdout.write('BAD SET' + '\n' + key);
      return;
    }
  }

  process.stdout.write('GOOD SET');
}

function processInput(input) {
  const processedInput = input.trim().replace(/\n/g, ' ').split(' ');

  return main(processedInput);
}

processInput(`7
aab
defgab
abcde
aabcde
cedaaa
bbbbbbbbbb
jabjjjad`)
