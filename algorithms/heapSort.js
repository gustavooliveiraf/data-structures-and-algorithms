// https://www.thehuxley.com/problem/577
const Heap = require('../dataStructures/Heap');

const swap = (a, i, j) => {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

const heapSort = (array) => {
  const heap = new Heap(array);

  for (let i = heap.heapSize - 1, j = 1; i >= 1; i--, j++) {
    swap(array, 0, i);
    heap.maxHeapify(0, heap.heapSize - j);
  }

  return heap.heap;
}

console.log(heapSort([27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9]));
