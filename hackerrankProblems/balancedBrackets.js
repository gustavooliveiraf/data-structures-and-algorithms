// https://www.hackerrank.com/challenges/balanced-brackets/problem
class StackNode {
  constructor(index) {
    this.index = index;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.front = null
  }

  isEmpty() {
    return this.front === null;
  }

  push(item) {
    const newFront = new StackNode(item);
    newFront.next = this.front;

    this.front = newFront;
  }

  pop() {
    if (this.isEmpty()) return null;

    const front = this.front;
    this.front = front.next;

    return front.index;
  }
}

function isBalanced(s) {
  const stack = new Stack();
  const map = new Map([['(', ')'], ['{', '}'], ['[', ']']]);

  const { length } = s;
  for (let i = 0; i < length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') stack.push(s[i])
    else if (stack.isEmpty()) return 'NO';
    else if (s[i] !== map.get(stack.pop())) return 'NO'
  }

  if (stack.isEmpty()) return 'YES';
  return 'NO';
}

function main(processedInput) {
  let index = 0;
  const t = parseInt(processedInput[index++]);

  for (let tItr = 0; tItr < t; tItr++) {
    let result = isBalanced(processedInput[index++]);

    console.log(result)
  }
}

function processInput(input) {
  const processedInput = input.replace(/\n/g, ' ').split(' ');

  return main(processedInput);
}

processInput(`3
{[()]}
{[(])}
{{[[(())]]}}
`)