// https://www.hackerrank.com/challenges/contacts/problem
function charToIndex(char) {
  return char.charCodeAt() - 97;
}

function indexToChar(string, index) {
  return string + String.fromCharCode(index + 97);
}

class Node {
  constructor() {
    this.children = new Array(26);
    this.isEndOfWord = false;
    this.count = 0;
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
      pointer.count++;
    }

    pointer.isEndOfWord = true;
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

function displayContacts(node, string) {
  if (node.isEndOfWord) console.log(string);

  for (let i = 0; i < 26; i++) {
    if (node.children[i])
      displayContacts (node.children[i], indexToChar(string, i))
  }
}

function main(queries) {
  let index = 0;
  let n = queries[index++];
  const root = new Node();
  const bTree = new BTree();

  for (let i = 0; i < n; i++) {
    const operation = queries[index++];

    if (operation[0] === 'a') bTree.insert(root, queries[index++]);
    else {
      const partialName = queries[index++];
      // const cache = map.get('partialName');
      const node = bTree.search(root, partialName);

      const count = node ? node.count : 0;
      process.stdout.write(count + '\n');
    }
  }
}

function processInput(input) {
  const processedInput = input.trim().replace(/\n/g, ' ').split(' ');

  return main(processedInput);
}

processInput(`4
add hacka
add hackerrank
find hack
find hak
`)