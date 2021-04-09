function countWays(arr, n) {
  let count = 0;
  for (let i = 0; i < n; i++)
    if (arr[i] >= 3)
      count += (arr[i] * (arr[i] - 1) * (arr[i] - 2)) / 6;

  return count;
}

function numberOfWays(n, graph) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    const stack = [];
    const visited = new Array(n).fill(false);
    const distance = new Array(n).fill(0);
    const equalDistance = new Array(n).fill(0);

    visited[i] = true;
    distance[i] = 0;
    stack.push(i);
  
    while (stack.length !== 0) {
      const node = stack.pop();

      const { length } = graph[node];
      for (let j = 0; j < length; j++) {
        const newNode = graph[node][j];
  
        if (visited[newNode]) continue;
  
        visited[newNode] = true;
        distance[newNode] = distance[node] + 1;
        equalDistance[distance[newNode]]++;
        stack.push(newNode);
      }
    }

    count += countWays(equalDistance, n);
  }

  return count;
}

function buildGraph(n, roads) {
  const graph = new Array(n);
  for (let i = 0; i < n; i++) graph[i] = new Array();
  for (let [a, b] of roads) {
    graph[--a].push(--b);
    graph[b].push(a);
  }

  return graph;
}

// const n = 5;
// const roads = [[1, 2], [2, 3], [3, 4], [4, 5]];
// const n = 5;
// const roads = [[1, 2], [1, 3], [1, 4], [1, 5]];
const n = 7;
const roads = [[1, 2], [2, 5], [3, 4], [4, 5], [5, 6], [7, 6]];

const graph = buildGraph(n, roads);

const res = numberOfWays(n, graph);

console.log(res);
