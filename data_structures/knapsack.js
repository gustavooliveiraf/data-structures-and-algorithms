const knapsack = (W, wt, val, n) => {
  const K = new Array(n + 1);
  for (let i = 0; i < (n + 1); i++) K[i] = new Array(W + 1);

  // Build table K[][] in bottom up manner
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

console.log(knapsack(50, [10, 20, 30], [60, 100, 120], 4));