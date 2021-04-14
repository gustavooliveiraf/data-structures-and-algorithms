class Heap {
  constructor(heap) {
    this.heap = heap;
  }

  parent(i) { return parseInt((i - 1) / 2); }

  left(i) { return 2 * i + 1; }

  right(i) { return 2 * i + 2 }

  size() { return this.heap.length; }

  empty() { return this.size() === 0; }

  push(weight) {
    this.heap.push(weight);
    
    let i = this.size() - 1;
    while (i !== 0 && this.heap[this.parent(i)] > this.heap[i]) {
      [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
      i = this.parent(i);
    }
  }

  pop() {
    if (this.empty()) return null;

    const temp = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.minHeapify(0);

    return temp;
  }

  minHeapify(i, heapSize = this.size()) {
    const l = this.left(i);
    const r = this.right(i);

    let smallest = (l < heapSize && this.heap[l] < this.heap[i]) ? l : i;
    if (r < heapSize && this.heap[r] < this.heap[smallest]) smallest = r;
  
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.minHeapify(smallest, heapSize);
    }
  }
}

class ParkingLot {
  constructor(slotsSize) {
    this.slotsSize = slotsSize;
    this.slots = (new Array(slotsSize)).fill(null);

    this.mapCarIdIndex = new Map();
    this.heapLowestFreeIndex = new Heap(Array(slotsSize).fill(0).map((x, y) => x + y));
  }

  park(carId) {
    if (this.heapLowestFreeIndex.size() === 0) return false;

    const lowestFreeIndex = this.heapLowestFreeIndex.pop();
    this.slots[lowestFreeIndex] = carId;
    this.mapCarIdIndex.set(carId, lowestFreeIndex);

    return true;
  }

  getSlots() {
    return this.slots;
  }

  remove(carId) {
    if (!this.mapCarIdIndex.has(carId)) return false;

    const carIdIndex = this.mapCarIdIndex.get(carId);
    this.slots[carIdIndex] = null;
    this.mapCarIdIndex.delete(carId);
    this.heapLowestFreeIndex.push(carIdIndex);

    return true;
  }
}

const test = new ParkingLot(5);
console.log(test.park('CAR-10'));
console.log(test.park('CAR-20'));
console.log(test.park('CAR-30'));
console.log(test.getSlots());
console.log(test.remove('CAR-20'));
console.log(test.getSlots());
console.log(test.park('CAR-40'));
console.log(test.getSlots());
console.log(test.park('CAR-50'));
console.log(test.getSlots());
console.log(test.park('CAR-60'));
console.log(test.getSlots());
console.log(test.park('CAR-70'));
console.log(test.getSlots());
