class HeapNode {
  constructor(i, j, elevation) {
    this.i = i;
    this.j = j;
    this.elevation = elevation;
  }
}

class Heap {
  constructor() {
    this.heap = new Array();
  }

  push(i, j, elevation) {
    this.heap.push(new HeapNode(i, j, elevation));
    this.sort();
  }

  pop() {
    return this.heap.pop();
  }

  sort() {
    this.heap.sort((a, b) => b.elevation - a.elevation);
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class Solution {
  dijkstra(grid, visited, n, directions) {
    const heap = new Heap();
    heap.push(0, 0, grid[0][0]);

    while(!heap.isEmpty()) {
      const { i, j } = heap.pop();
      if (visited[i][j]) continue;
      if (i === n - 1 && j === n - 1) return grid[n - 1][n - 1];

      visited[i][j] = true;

      for (const [x, y] of directions) {
        const xx = i + x, yy = j + y;
        if (xx >= 0 && yy >= 0 && xx < n && yy < n && !visited[xx][yy]) {
          if (grid[xx][yy] < grid[i][j]) {
            grid[xx][yy] = grid[i][j];
          }

          heap.push(xx, yy, grid[xx][yy]);
        }
      }
    }
  }

  /**
   * @param {number[][]} grid
   * @return {number}
   */
  swimInWater(grid) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = Array.from({ length: grid.length }, () => new Array(grid.length).fill(false));

    return this.dijkstra(grid, visited, grid.length, directions);
  }
}

const grid = [
  [0,1,2,10],
  [9,14,4,13],
  [12,3,8,15],
  [11,5,7,6]
];
console.log(new Solution().swimInWater(grid));
