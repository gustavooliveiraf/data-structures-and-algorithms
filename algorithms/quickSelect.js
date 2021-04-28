function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Swap (arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

function Partition (items, left, right) {
  const x = items[right];
  let pivotIndex = left - 1;

  for (let j = left; j < right; j++) {
    if (items[j] <= x) {
      pivotIndex++;
      Swap(items, pivotIndex, j);
    }
  }

  Swap(items, pivotIndex + 1, right);

  return pivotIndex + 1;
}

function RandomizedPartition (items, left, right) {
  const rand = getRandomInt(left, right);
  Swap(items, rand, right);
  return Partition(items, left, right);
}

function RandomizedSelect(items, left, right, kth) {
  if (left === right) return items[left];

  const pivotIndex = RandomizedPartition(items, left, right);

  if (kth === (pivotIndex + 1)) return items[pivotIndex];
  if (kth < (pivotIndex + 1)) return RandomizedSelect(items, left, pivotIndex - 1, kth);
  return RandomizedSelect(items, pivotIndex + 1, right, kth);
}

function quickSelect (items, kth) {
  return RandomizedSelect(items, 0, items.length - 1, kth);
}

const arr = [10, 4, 5, 8, 6, 11, 26];
const kth = 3;
quickSelect(arr, kth);
console.log(arr);
console.log(arr[kth - 1]);
