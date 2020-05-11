// https://www.thehuxley.com/problem/578
// https://www.thehuxley.com/problem/577

const printHeap = (a, heapSize) => {
  for (let i = 0; i < heapSize; i++) process.stdout.write(' ' + a[i] + ' |')
  console.log()
}

const swap = (a, i, j) => {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

const heapify = (a, i, heapSize) => {
  const l = 2 * i + 1;
  const r = l + 1;
  let smallest;

  smallest = (l < heapSize && a[l] < a[i]) ? l : i;
  if (r < heapSize && a[r] < a[smallest]) smallest = r;

  if (smallest !== i) {
    swap(a, i, smallest);
    heapify(a, smallest, heapSize);
  }
}

const buildMaxHeap = (a, heapSize) => {
  for (let i = parseInt(heapSize/2); i >= 0; i--) heapify(a, i, heapSize);
}

const heapSort = (a) => {
  const heapSize = a.length;

  buildMaxHeap(a, heapSize);

  for (let i = heapSize - 1, j = 1; i >= 1; i--, j++) {
    swap(a, 0, i);
    heapify(a, 0, heapSize - j)
  }

  printHeap(a, heapSize);
}

heapSort([27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9])
