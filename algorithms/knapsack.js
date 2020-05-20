const knapsack = (W, wt, val) => {
  const n = val.length;
  const K = new Array(n + 1);
  for (let i = 0; i < (n + 1); i++) K[i] = new Array(W + 1);

  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (i==0 || w==0)
        K[i][w] = 0;
      else if (wt[i-1] <= w)
        K[i][w] = Math.max(val[i-1] + K[i-1][w-wt[i-1]],  K[i-1][w]);
      else
        K[i][w] = K[i-1][w];
    }
  }

  return K[n][W];
}

// ======= knapsackRecursive =======

const n = 4
const c = 5
v = [0, 500, 400, 300, 450]
w = [0, 4, 2, 1, 3]

const arr = new Array(n + 1).fill(null);
arr.forEach((elem, index) => {
  if (index === 0)
    return arr[index] = new Array(c + 1).fill(0);
  arr[index] = new Array(c + 1);
  arr[index][0] = 0;
})

function knapsackRecursive(v, w, n, c) {
  if (arr[n][c] !== undefined) return arr[n][c];

  let result;
  if (n === 0 || c === 0)
    return arr[n][c] = 0;
  if (w[n] > c)
    return arr[n][c] = knapsackRecursive(v, w, n - 1, c);

  const temp1 = knapsackRecursive(v, w, n - 1, c);
  const temp2 = v[n] + knapsackRecursive(v, w, n - 1, c - w[n]);

  return arr[n][c] = Math.max(temp1, temp2);
}

console.log(knapsackRecursive(v, w, n, c));
// console.log(knapsack(50, [10, 20, 30], [60, 100, 120]));
