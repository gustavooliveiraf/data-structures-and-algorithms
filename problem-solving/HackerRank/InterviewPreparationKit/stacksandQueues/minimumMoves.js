// https://www.hackerrank.com/challenges/castle-on-the-grid
class QueueNode {
  constructor(x, y, count) {
    this.x = x;
    this.y = y;
    this.count = count;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null;
  }

  push(x, y, count) {
    const temp = new QueueNode(x, y, count);

    if (this.rear === null) {
      this.front = this.rear = temp;
      return;
    }

    this.rear.next = temp;
    this.rear = temp;
  }

  pop() {
    if (this.isEmpty()) return null;

    const temp = this.front;
    this.front = temp.next;

    if (this.front === null) this.rear = null;

    return [temp.x, temp.y, temp.count];
  }
}

function updateHorizontal(count, queue, grid, startX, y, goalX, goalY) {
  if (startX === goalX && y === goalY) return true;

  if (grid[startX][y] === '.') {
    grid[startX][y] = 'O';
    queue.push(startX, y, count);
  }
}

function updateVertical(count, queue, grid, x, startY, goalX, goalY) {
  if (x === goalX && startY === goalY) return true;

  if (grid[x][startY] === '.') {
    grid[x][startY] = 'O';
    queue.push(x, startY, count);
  }
}

function moveRight(n, count, queue, grid, startX, startY, goalX, goalY) {
  let y = startY;
  while (y < n) {
    if (updateHorizontal(count, queue, grid, startX, y, goalX, goalY)) return true;
    if (y + 1 === n || grid[startX][y + 1] === 'X') break;
    y++;
  }
}

function moveLeft(n, count, queue, grid, startX, startY, goalX, goalY) {
  let y = startY;
  while (y >= 0) {
    if (updateHorizontal(count, queue, grid, startX, y, goalX, goalY)) return true;
    if (y === 0 || grid[startX][y - 1] === 'X') break;
    y--;
  }
}

function moveUp(n, count, queue, grid, startX, startY, goalX, goalY) {
  let x = startX;
  while (x >= 0) {
    if (updateVertical(count, queue, grid, x, startY, goalX, goalY)) return true;
    if (x === 0 || grid[x - 1][startY] === 'X') break;
    x--;
  }
}

function moveDown(n, count, queue, grid, startX, startY, goalX, goalY) {
  let x = startX;
  while (x < n) {
    if (updateVertical(count, queue, grid, x, startY, goalX, goalY)) return true;
    if (x + 1 === n || grid[x + 1][startY] === 'X') break;
    x++;
  }
}

function minimumMoves(n, grid, startX, startY, goalX, goalY) {
  const queue = new Queue();
  queue.push(startX, startY, 0);

  while (!queue.isEmpty()) {
    const [currentStartX, currentStartY, count] = queue.pop();
    const incCount = count + 1;
    
    if (moveRight(n, incCount, queue, grid, currentStartX, currentStartY, goalX, goalY)) return incCount;
    if (moveLeft(n, incCount, queue, grid, currentStartX, currentStartY, goalX, goalY)) return incCount;
    if (moveUp(n, incCount, queue, grid, currentStartX, currentStartY, goalX, goalY)) return incCount;
    if (moveDown(n, incCount, queue, grid, currentStartX, currentStartY, goalX, goalY)) return incCount;
  }
}

function main(processedInput) {
  let line = 0;
  const grid = [];

  const n = parseInt(processedInput[line++], 10);
  for (let i = 0; i < n; i++)
    grid.push(processedInput[line++].split(''));

  const [startX, startY] = [Number(processedInput[line++]), Number(processedInput[line++])];
  const [goalX, goalY] = [Number(processedInput[line++]), Number(processedInput[line])];

  console.log(minimumMoves(n, grid, startX, startY, goalX, goalY));
}

function processInput(input) {
  const processedInput = input.replace(/\n/g, ' ').split(' ');

  return main(processedInput);
}

processInput(`3
.X.
.X.
...
0 0 0 2`);
