class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
  }

  add(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  remove(node) {
    if (!node) {
      return;
    }

    const prev = node.prev;
    const next = node.next

    if (!prev) {
      if (next) {
        next.prev = null;
      }
      this.head = next;
    } else {
      prev.next = next;
    }

    if (!next) {
      if (prev) {
        prev.next = null;
      }
      this.tail = prev;
    } else {
      next.prev = prev;
    }
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const node = this.map.get(key);
    if (node === undefined) {
      return -1;
    }

    this.remove(node);
    this.add(node);

    return node.val
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.map.has(key)) {
      this.remove(this.map.get(key));
    }
    const node = new Node(key, value);
    this.map.set(key, node);
    this.add(node);

    if (this.map.size > this.capacity) {
      this.map.delete(this.tail.key);
      this.remove(this.tail);
    }
  }
}

const solution = new LRUCache(3);

solution.put(1, 1);
solution.put(2, 2);
solution.put(3, 3);
console.log(solution.get(1));
console.log(solution.get(2));
console.log(solution.get(4));
solution.put(4, 4);
console.log(solution.get(1));
console.log(solution.get(2));
console.log(solution.get(3));
console.log(solution.get(4));
console.log(solution.get(2));
solution.put(1, 8);
solution.put(3, 7);
console.log(solution.get(1));
