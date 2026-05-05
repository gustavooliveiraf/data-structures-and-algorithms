class Node {
  constructor(key = 0, val = 0, next = null, prev = null) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insert(node) {
    const next = this.head.next;

    next.prev = node;
    node.next = next;
    node.prev = this.head;
    this.head.next = node;
  }

  remove(node) {
    const next = node.next;
    const prev = node.prev;

    prev.next = next;
    next.prev = prev;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);
    this.remove(node);
    this.insert(node);

    return node.val;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
    }

    const node = new Node(key, value);
    this.insert(node);
    this.cache.set(key, node);

    if (this.cache.size > this.capacity) {
      const lru = this.tail.prev;
      this.remove(lru);
      this.cache.delete(lru.key)
    }
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(2, 6);
lRUCache.put(1, 5);
lRUCache.put(1, 2);
console.log(lRUCache.get(1));
console.log(lRUCache.get(2));
