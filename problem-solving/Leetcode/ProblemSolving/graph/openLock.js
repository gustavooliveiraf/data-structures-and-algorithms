// https://leetcode.com/problems/open-the-lock
function prev(char) {
  return char == 0 ? '9' : char - 1;
}
function next(char) {
  return char == '9' ? '0' : char - (-1);
}
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let turns = 0;
  const queue = new Array();
  const visited = new Set(deadends);

  if (visited.has('0000')) {
    return -1;
  }

  visited.add('0000');
  queue.push('0000');
  while (queue.length) {
    const length = queue.length;
    for (let _ = 0; _ < length; _++) {
      const currNode = queue.shift();

      if (currNode === target) {
        return turns;
      }

      for (let i in currNode) {
        let newLeftNode = currNode.split('');
        newLeftNode[i] = prev(newLeftNode[i]);
        newLeftNode = newLeftNode.join('');
        if (!visited.has(newLeftNode)) {
          queue.push(newLeftNode);
          visited.add(newLeftNode);
        }

        let newRightNode = currNode.split('');
        newRightNode[i] = next(newRightNode[i]);
        newRightNode = newRightNode.join('');
        if (!visited.has(newRightNode)) {
          queue.push(newRightNode);
          visited.add(newRightNode);
        }
      }
    }
    turns++;
  }

  return -1;
};

const deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888";
console.log(openLock(deadends, target));
