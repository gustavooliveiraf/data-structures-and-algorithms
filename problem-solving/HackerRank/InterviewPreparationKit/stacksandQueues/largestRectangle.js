// https://www.hackerrank.com/challenges/largest-rectangle
class Stack {
  constructor() {
    this.stack = new Array();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    if (this.isEmpty()) return null;

    return this.stack.pop();
  }
}

function computeRectangle(stack, heights, i) {
  const currMax = stack.pop();
  return heights[currMax] * (stack.isEmpty() ? i : (i - 1 - stack.top()));
}

function largestRectangle(heights) {
  const stack = new Stack();
  let maxArea = 0, i = 0;

  while (i < heights.length) {
    if (stack.isEmpty() || heights[stack.top()] <= heights[i]) {
      stack.push(i);
      i++;
    } else {
      maxArea = Math.max(maxArea, computeRectangle(stack, heights, i));
    }
  }

  while (!stack.isEmpty())
    maxArea = Math.max(maxArea, computeRectangle(stack, heights, i));

  return maxArea;
}

const heights = [1, 2, 3, 4, 5, 3, 3, 2];
console.log(largestRectangle(heights));
