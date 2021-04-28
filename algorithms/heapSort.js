// https://www.thehuxley.com/problem/577
const Heap = require('../data-structures/Heap');

const heapSort = (array) => {
  const heap = new Heap(array);

  for (let i = heap.size() - 1, j = 1; i >= 1; i--, j++) {
    [array[0], array[i]] = [array[i], array[0]];
    heap.heapify(0, heap.size() - j);
  }

  return heap.array;
}

console.log(heapSort([27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9]));
