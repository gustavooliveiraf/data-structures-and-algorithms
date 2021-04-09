function maxElement(n, maxSum, k) {
  let sumRemain = maxSum - n;
  let kValue = 1;

  while (sumRemain > 0) {
    kValue++; sumRemain--;
    const left = k <= (kValue - 1) ? k : (kValue - 1);
    const right = (n - (k + 1)) < (kValue - 1) ? (n - (k + 1)) : (kValue - 1);
    sumRemain = sumRemain - (left + right);
  }

  return kValue;
}

const a = maxElement(3, 6, 1);

console.log(a);
