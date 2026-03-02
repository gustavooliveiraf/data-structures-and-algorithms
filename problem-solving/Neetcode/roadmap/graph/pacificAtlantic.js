class Solution {
  init(queue, visited, n, m, border1, border2) {
    for (let i = 0; i < n; i++) {
      queue.push([i, border2]);
      visited[i] = new Array(m);
      for (let j = 0; j < m; j++) {
        if (i === 0 && j !== border2) {
          queue.push([border1, j]);
        }
        visited[i][j] = false;
      }
    }
  }

  bfs(heights, queue, visited, directions, n, m) {
    while(queue.length > 0) {
      const [i, j] = queue.pop();
      visited[i][j] = true;

      for (let [x, y] of directions) {
        const nextI = i + x;
        const nextJ = j + y;
        if (nextI >=0 && nextJ >= 0 && nextI < n && nextJ < m
          && visited[nextI][nextJ] === false
          && heights[nextI][nextJ] >= heights[i][j]) {
            queue.push([nextI, nextJ]);
        }
      }
    }

    return visited;
  }

  /**
   * @param {number[][]} heights
   * @return {number[][]}
   */
  pacificAtlantic(heights) {
    const n = heights.length, m = heights[0].length;
    const visitedPacific  = new Array(n);
    const visitedAtlantic = new Array(n);
    const queue = new Array();
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]

    this.init(queue, visitedPacific, n, m, 0, 0);
    this.bfs(heights, queue, visitedPacific, directions, n, m);

    this.init(queue, visitedAtlantic, n, m, n - 1, m - 1);
    this.bfs(heights, queue, visitedAtlantic, directions, n, m);

    const result = new Array();
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (visitedPacific[i][j] === true && visitedAtlantic[i][j] === true) {
          result.push([i, j]);
        }
      }
    }

    return result;
  }
}

const heights = [
  [4,2,7,3,4],
  [7,4,6,4,7],
  [6,3,5,3,6]
];
console.log(new Solution().pacificAtlantic(heights));
